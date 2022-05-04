
var init = {
    curselad:[{goods_src:""}]
}
   


export default function (state=init,action) { 
    var {data,type} =action
    switch(type){
        case "ad" : state=data;
        default : return state;
    }
 }