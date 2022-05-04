import { combineReducers } from 'redux'
import AdData from '../Reducer/AdData'
import CacheArr from '../Reducer/CacheArr'

import LoginSet from '../Reducer/LoginSet'
import ShopCaftReducer from '../Reducer/ShopCaftReducer'
import SideNav from '../Reducer/SideNav'
import UserReducer from '../Reducer/UserReducer'
export default combineReducers({
    ShopCaftReducer,
    UserReducer,
    LoginSet,
    SideNav,
    CacheArr
    ,
AdData,






})