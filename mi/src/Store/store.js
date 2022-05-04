// 缓存机制
import storage from 'redux-persist/lib/storage'

import promise from 'redux-promise'

import {createStore,applyMiddleware} from 'redux'

import Reducers from '../Reducers/Reducers'

import thunk from 'redux-thunk'
//1. 引入扩展
import { composeWithDevTools} from 'redux-devtools-extension'

// 持久化
import {persistStore, persistReducer} from 'redux-persist';

// 持久化配置对象
const config = {
storage,
  key: 'root',
//   该数组为缓存的白名单 在该数组的数据都会持久化
  whitelist: ['LoginSet',"ShopCaftReducer","SideNav"]
}
// 创建持久化reducers 要传入持久化配置对象和reducers集合
const reducer = persistReducer(config, Reducers)
 
// 创建store
var store = createStore(reducer,
 composeWithDevTools(applyMiddleware(thunk)),
 

);

//  persistStore的使用，可配置很多参数，如存储引擎、黑白名单等。
let persistor = persistStore(store);

// 必须暴露两个对象 给index.js使用
export default {store,persistor}
