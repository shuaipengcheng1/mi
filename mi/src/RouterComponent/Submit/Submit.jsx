
import React, { useState, useRef } from 'react';
import './index.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import  {message} from 'antd'
function Submit(props) {
  var eye = useRef();
  var pass = useRef();
  var user = useRef();
  var check = useRef();
  var [state, setState] = useState(false);
  var [username, setUsername] = useState('')
  var [password, setPassword] = useState('')
  var setUser = () => {
    // 

    setUsername(username = user.current.value);
  }
  var setPass = () => {
    setPassword(password = pass.current.value)
  }
  var eyechange = () => {
    // 改变字体图标
    setState(state = !state);
    if (state) {
      // 为true打开眼睛
      pass.current.type = "text"
    } else {
      pass.current.type = "password"

    }

  }
  var ToLogin = () => {
    // 判断是否勾选
    console.log(check.current.checked)
    if (check.current.checked && username.length > 0 && password.length > 6) {
      axios.defaults.withCredentials = true;
      const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', password);
      axios.post('/Submit', params).then((v)=>{
var {state,message: m} = v.data;
if(state){
  console.log(props)
  message.success(m)

  props.history.push("/login")
}else{
  message.error(m)
}
      });


    } else {
      alert("请勾选! or password or username");
    }

  }
  return (
    <div className='SubmitBox'>
      <input type="text" name='username' ref={user} onChange={setUser} className='username' placeholder='输入邮箱/手机/电话号码' />
      <div className="password">
        <input type="password" ref={pass} onChange={setPass} name='password' placeholder='输入密码' className='passwordI' /><div onClick={eyechange}><i className={state ? 'iconfont icon-yanjing' : 'iconfont icon-biyanjing'} ref={eye}></i></div>
      </div>
      <div className='text'>
        <input type={"checkbox"} ref={check} />已阅读消息账号 <b>用户协议</b> 和 <b>隐私政策</b>
      </div>
      <div className="Btn">
        <button onClick={ToLogin}>注册</button>
      </div>
    </div>
  )
}
export default withRouter(Submit)
