
var init =false

export default function (prestate=init,action) { 
    var {type,data} =action
    switch(type){
        case 'setLogin':prestate=data;
        default:return prestate
    }
 }