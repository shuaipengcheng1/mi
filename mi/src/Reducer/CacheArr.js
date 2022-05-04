
// 缓存数组 用于缓存页面数据 防止过多的ajax请求 拖慢速度
var init =[]

export default function (prestate=init,action) { 
    var {data,type} = action;
    switch(type){
    case 'setCaChe' :prestate= [...prestate,data];
    default :return prestate;
    }
 }