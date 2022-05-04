// 引入ui组件
import Main from "../../Component/Main/Main";
// 引入action
import {get,add,del,set} from '../../ActionMaker/ShopCaft'
import{ getUser,setUser} from '../../ActionMaker/User'
import check from "../../ActionMaker/check";
import setSide from "../../ActionMaker/setSide";
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
         setLogin:(data)=>{dispatch(check(data))},
         SideSet:(data)=>{dispatch(setSide(data))},
     }
  }

  var MainContain = connect(state,dispatch)(Main)
  export default MainContain
