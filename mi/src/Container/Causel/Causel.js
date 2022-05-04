
// 引入action
import {get,add,del,set} from '../../ActionMaker/ShopCaft'
import{ getUser,setUser} from '../../ActionMaker/User'
import check from "../../ActionMaker/check";
import setSide from "../../ActionMaker/setSide";
import Cache from "../../ActionMaker/Cache";
// 引入connect
import {connect} from 'react-redux'
import Causel from "../../ActionMaker/Causel";
import c from '../../Component/Causel/Causel'

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
         setCache :(data)=>{dispatch(Cache(data))},
         setCausel:(data)=>{dispatch(Causel(data))}



     }
  }

  var cContain = connect(state,dispatch)(c)
  export default cContain
