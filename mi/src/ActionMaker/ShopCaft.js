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