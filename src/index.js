'use strict';
import React, { useReducer, useContext } from 'react';
function createLiveStore(reducerMap) {
    if (arguments.length === 0) {
        throw 'Reducer is required';
    }
    if ([Object, Function].indexOf(arguments[0].constructor) === -1) {
        throw 'Parameter exception,The reducer collection must be an object type, ' +
        'If there is only one reducer, use the reducer as the parameter directly' +
        'For example:: {reducer1,reducer2,...} or reducer';
    }
    if (arguments[0].constructor === Function) {
        const onlyReducer = arguments[0];
        arguments[0] = { onlyReducer };
    }
    //绑定到第一个参数上
    reducerMap = arguments[0];
    //克隆reducer
    const clonedReducers = {};
    //async store
    let asyncStore = [];
    for (let a in reducerMap) {
        if (reducerMap[a].constructor !== Function) {
            throw 'The type of reducer must be a function';
        }
        clonedReducers[a] = reducerMap[a];
    }
    //combineStores
    function combineStores() {
        const stores = {};
        for (let b in clonedReducers) {
            const state = clonedReducers[b](undefined, { type: null });
            if (state === undefined || state === null) {
                throw 'The return value of reducer cannot be null or undefined';
            }
            stores[b] = state;
        }
        return stores;
    }
    //combineReducers
    function combineReducers() {
        function hookReducer(state, action) {
            const nextState = {};
            for (let c in clonedReducers) {
                const prevState = state[c];
                const currentReducer = clonedReducers[c];
                const currentState = currentReducer(prevState, action);
                if (currentState === undefined) {
                    throw 'Reducer must return state,current reducer: ' + currentReducer;
                }
                nextState[c] = currentState;
            }
            asyncStore[0] = nextState;
            return nextState;
        }
        return hookReducer;
    }
    //merge stores
    const stores = combineStores();
    //merge reducer
    const reducer = combineReducers();
    //create context
    const Context = React.createContext(stores);
    //Provider
    function Provider({ children }) {
        const [state, dispatch] = useReducer(reducer, stores);
        asyncStore = [state, dispatch];
        return <Context.Provider
            value={[state, dispatch]}
        >
            {children}
        </Context.Provider>;
    }
    function useStore() {
        return useContext(Context);
    }
    function useProvider(FC) {
        try {
            const current = typeof FC === 'function' ? <FC /> : FC;
            return <Provider>{current}</Provider>;
        } catch (e) {
            throw e.name + ', ' + e.message;
        }
    }
    function getAsyncStore() {
        return asyncStore;
    }
    return { useStore, useProvider, getAsyncStore };
}
export default createLiveStore;
