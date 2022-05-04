// 处理购物车的函数
/*
// 购物车的方法对象
// 获取购物车内容
export function get() {
    return {data:"",type:"获取购物车"}
  }
//   添加购物车
  export function add(data){
      return {data,type:"add"}
  }
//   删除商品
export function del(data) {
    return {data,type:"del"}
  }
  // 赋值函数
  export function set(data){
    return {data,type:"set"}

  }
*/

var init = "[]";

export default function (prestate=init,action) { 
    var {type,data} = action;
    switch(type){
   
                  
        case "add":JSON.parse(prestate).push(data) //这里调用后端连接 以便更新后端数据;

        case 'del':var a= JSON.parse(prestate) ;a[data]='' //这里调用后端连接 更新后端数据

        case 'set':prestate=data; //赋值
        
        default :return prestate
    }
 }