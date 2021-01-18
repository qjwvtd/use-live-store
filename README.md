# use-live-store

### This is a state manager implemented only with the react hooks API<useContext,useReducer>
### use createLiveStore, Realize global state management
### be careful:Used this tool, you have to accept the use of react hooks to develop your project

### 这是一个仅用react hooks api<useContext,useReducer>实现的状态管理器
### 通过createLiveStore,实现全局状态管理
### 注意:使用这个工具,你必须接受使用react hooks来开发你的项目

## installation

To install the stable version:

```sh
npm install --save-dev use-live-store
```

That's it!
```js
import createLiveStore from 'use-live-store';
```

## Example
### /reducer/project.js
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

### /reducer/girl.js
```js
const initState = {
    list: []
};
export default function (state = initState, action) {
    switch (action.type) {
        case 'init_girl':
            state.list = action.data;
            break;
    }
    return Object.assign({}, state);
}
```

### action.js
```js
import { getGirlDataApi } from '@/common/api/public';
export function initGirl() {
    return function (dispatch) {
        getGirlDataApi().then((res) => {
            if (res.status === 100) {
                const action = { type: 'init_girl', data: res.data };
                dispatch(action);
            }
        });
    };
}
```

### store.js
```js
import project from './reducer/project';
import girl from './reducer/girl';

const reducers = { girl, project };
const liveStore = createLiveStore(reducers);
//useStore
export const useStore = liveStore.useStore;
//alias,Avoid duplicate name with Provider of react-Redux
export const Wapper = liveStore.Wapper;
```

```js
//app.js
import { useStore, Wapper } from './store';
import { initGirl } from './action';
function View(){
    const {state, dispatch} = useStore();
    useEffect(() => {
        //no async
        dispatch({type: 'xxx',data: 'xxx'});
        //or async
        dispatch(initGirl());
    },[]);
    return <div>{state}</div>; 
}
function App(){
    //useStore() cannot be used within a top-level component,
    return <Wapper>
        <View />
    </Wapper>;
}
ReactDOM.render(
    <App />,document.body
);
````