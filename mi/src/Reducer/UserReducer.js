/*

// 写入用户信息
export  function setUser(data) { 
    return{data,type:"setUser"}
 }
//  获取
export  function getUser() { 
    return{type:"getUser",data:""}
 }
*/
var init ={};

export default function (prestate=init,action) {
    var {data,type} = action;
    console.log(action)
    switch(type){
      
        case 'setUser' : prestate=data;
        default : return prestate
    }
  }