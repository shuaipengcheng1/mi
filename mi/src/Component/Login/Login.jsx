import React, { useRef } from 'react';
import './index.css'
import { Route, Switch, NavLink, withRouter } from 'react-router-dom'
import Submit from '../../RouterComponent/Submit/Submit';
import L from '../../Container/LoginContainer/LoginContain';

 function Login(props) {
    var arr = ['用户协议', '隐私政策', '帮助中心']

    var stiker = useRef();

    // 动画
    var goback = () => {
        // 获取left
        var left = stiker.current.offsetLeft

        stiker.current.style.left = left + "px"
        var time = setInterval(() => {
            left -= 4;
            stiker.current.style.left = left + "px";
            if (stiker.current.offsetLeft <= 0) {
                clearInterval(time)
            }
        }, 20)

    }
    // 回首页
    var goHome=()=>{
        console.log(props)
        props.history.replace("/")
    }
    return (

        <div className='LoginBox'>
            {/* 左侧 */}
            <div className="loginImg">
            </div>
            {/* 右侧 */}
            <div className="LoginContainer">
                <div className="Top">
                    {/* 小米logo */}
                    <div className="Logo" onClick={goHome}>
                        <img src="http://395789ob20.zicp.vip:31004/logo/logo.png" alt="" />
                        <span>小米账号</span>
                    </div>
                    {/*  */}
                    <div className='search'>
                        {
                            arr.map((item, index) => {
                                return (
                                    <a href="#" key={index}>
                                        <div className='item'>
                                            {item}
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>

                {/* 登录栏 */}
                <div className="loginController">
                    {/* 登录 */}
                    <div className="loginInput">
                        {/* 分类 路由 登录 注册*/}
                        <div className="top">
                            <NavLink to={"/login"} exact activeClassName='login' onClick={goback}>
                                <div className='login' >登录</div>
                            </NavLink>
                            <NavLink to={"/login/submit"} exact activeClassName='submit'>
                                <div className='submit'>注册</div>
                            </NavLink>

                            <div className='stiker' ref={stiker}></div>
                        </div>
                        <div>
                            <Switch>
                                <Route component={() => (<Submit />)} path="/login/submit" />
                                <Route component={() => (<L />)} path="/login" />
                                 {/* 默认 */}
                                {/* <Redirect path="/" to="/loginpush" /> */}
                            </Switch>



                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}
export default withRouter(Login)
