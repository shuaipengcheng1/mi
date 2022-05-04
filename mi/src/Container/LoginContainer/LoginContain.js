// 引入ui组件
import Login from "../../RouterComponent/Login/Login";
// 引入action
import {get,add,del,set} from '../../ActionMaker/ShopCaft'
import{ getUser,setUser} from '../../ActionMaker/User'
import check from "../../ActionMaker/check";


// 引入connect
import {connect} from 'react-redux'

function state(state) {
    // 赋值给props
    return {shopcaft:state}
 }
 function dispatch(dispatch) { 
     return{
         get:()=>{dispatch(get())},
         add:(data)=>{dispatch(add(data))},
         del:(data)=>{dispatch(del(data))},
         set:(data)=>{dispatch(set(data))},
         getUser:()=>{dispatch(getUser())},
         setUser:(data)=>{dispatch(setUser(data))},
         setLogin:(data)=>{dispatch(check(data))}


     }
  }

  var LoginContain = connect(state,dispatch)(Login)
  export default LoginContain

