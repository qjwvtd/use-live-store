# use-live-store

### This is a state manager implemented only with the react hooks API<useContext,useReducer>
### use createLiveStore, you can create different state managers, global or local
### be careful:Used this tool, you have to accept the use of react hooks to develop your project

### 这是一个仅用react hooks api<useContext,useReducer>实现的状态管理器
### 通过createLiveStore,你可以创建不同的状态管理器,既可以是全局的,也可以是局部的
### 注意:使用这个工具,你必须接受使用react hooks来开发你的项目

## installation

To install the stable version:

```sh
npm install --save-dev use-live-store
```

That's it!
```js
import createLiveStore from 'use-live-store';
const reducers = {reducer1,reducer2,reducer3,...};
const { useStore, useProvider, getAsyncStore } = createLiveStore(reducers);
//To avoid naming conflicts, alias
export const useGloblaStore = useStore;
export const useGloblaProvider = useProvider;
export const globlaAsyncStore = getAsyncStore;
```
```js
//useStore,Use within components
function App(){
    const [state,dispatch] = useGloblaStore();
    return <div>{state}</div>;
}
//getAsyncStore,For external use, such as in encapsulated request functions or other utility functions
function asyncRequest(){
    const [state,dispatch] = globlaAsyncStore();
    setimeout(() => {
        dispatch({type:'xxx',data: xxx});
    },2000);
}
```
## Example
### project.js
```js
const initState = {
    name: '金融城项目',
    desc: '关于金融城项目的描述'
};
export default function (state = initState, action) {
    switch (action.type) {
        case 'init_project':
            state.name = action.data.name;
            state.desc = action.data.desc;
            break;
    }
    return Object.assign({}, state);
}
```

### user.js
```js
const initState = {
    name: '',
    role: ''
};
export default function (state = initState, action) {
    switch (action.type) {
        case 'init_user':
            state.name = action.data.name;
            state.role = action.data.role;
            break;
    }
    return Object.assign({}, state);
}
```

### store.js
```js
import project from './project';
import user from './user';

const reducers = { user, project };
const { useStore, useProvider, getAsyncStore } = createLiveStore(reducers);
//To avoid naming conflicts, alias
export const useGloblaStore = useStore;
export const useGloblaProvider = useProvider;
export const globlaAsyncStore = getAsyncStore;
```

```js
//app.js
import {useGloblaStore,useGloblaProvider,globlaAsyncStore} from './store';
import {getUserDataApi} from './api';
function asyncRequest(params){
    //anync request
    const [state, dispatch] = globlaAsyncStore();
    getUserDataApi(params).then((data) => {
        const action = {type: 'init_user',data: data};
        dispatch(action);
    });
}
function View(){
    const [state, dispatch] = useGloblaStore();
    //or
    const [, dispatch] = useGloblaStore();
    //or
    const [state] = useGloblaStore();
    //async
    useEffect(() => {
        asyncRequest(1);
    },[]);
    return <div>{state}</div>; 
}
function App(){
    //useStore() cannot be used within a top-level component,
    //At this time, the Provider has not injected the store into the View
    return useGloblaProvider(View);
}
ReactDOM.render(
    <App />,document.body
);
````