'use strict';
import React from 'react';
export default function createLiveStore(reducerMap) {
    if (arguments.length === 0) {
        throw 'Reducer is required';
    }
    if (arguments[0].constructor !== Object) {
        throw 'Parameter exception,The reducer collection must be an object type, ' +
        'For example:: {reducer1,reducer2,...} or {reducer}';
    }
    //绑定到第一个参数上
    reducerMap = arguments[0];
    //克隆reducer
    const clonedReducers = {};
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
        return function (state, action) {
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
            return nextState;
        };
    }
    //merge stores
    const stores = combineStores();
    //merge reducer
    const reducer = combineReducers();
    //create context
    const Context = React.createContext(stores);
    //Wapper
    function Wapper({ children }) {
        const [state, action] = React.useReducer(reducer, stores);
        const dispatch = function () {
            if (arguments[0].constructor === Object) {
                action.apply(action, [arguments[0]]);
            }
            if (arguments[0].constructor === Function) {
                arguments[0].apply(arguments[0], [action]);
            }
            return action;
        };
        return /*#__PURE__*/React.createElement(Context.Provider, {
            value: { state, dispatch }
        }, children);
    }
    function useStore() {
        let store = null;
        try {
            store = React.useContext(Context);
        } catch (e) {
            throw e.name + ', ' + e.message;
        }
        return store;
    }
    return { useStore, Wapper };
}
