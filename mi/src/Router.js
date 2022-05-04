import Main from './Container/Main/Main'
import Login from './Component/Login/Login'
var route=[
  
    {
        // 登录页面
        path:'/login',
        component:Login
        
    },
    {
        // 注册页面
        path:'/login/submit',
        component:Login
    },
      // 主页
      {
        path:'/',
        component:Main
    },
]

export default route