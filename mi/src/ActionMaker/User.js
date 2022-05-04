// 写入用户信息
export  function setUser(data) { 
    return{data,type:"setUser"}
 }
//  获取
export  function getUser() { 
    return{type:"getUser",data:""}
 }