// src/store/index.js
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import userStore from './modules/userStore';

// 合并reducer
const rootReducer = combineReducers({
    userStore
})

// 设置中间件
const middlewares = [
    thunkMiddleware
]


export default function configStore() {
    const store = createStore(rootReducer, applyMiddleware(...middlewares))
    return store
}
