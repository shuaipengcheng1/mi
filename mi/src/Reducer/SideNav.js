// 边栏

/**
 * // 设置边栏数据
export default function (data) { 
    return {data,type:'setSide'};
 }
 */

 var init =[]
 export default function(prestate=init,action){
     var {data,type} = action;
     switch(type){
         case 'setSide': prestate=data;
         default: return prestate;
     }
 }