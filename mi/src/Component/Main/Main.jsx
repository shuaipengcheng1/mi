import React, { useEffect } from 'react';
import axios from 'axios'
import TopNav from '../../Container/TopNav/TopNav'
import Causel from '../../Container/Causel/Causel';
import TopService from '../../Container/TopService/TopService';
export default function Main(props) {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    // 获取登录状态
    axios({
      url: "/check",
      method: "GET",

    }).then((v) => {
      // 将状态设置到redux中
      // console.log()
      props.setLogin(v.data.state)
    })
    // 获取侧栏数据
    axios({
      url: "/getSide",
      method: "GET"
    }).then((v) => {
      props.SideSet(v.data)
      console.log(v.data)
    })
  }, [])
  return (
    <>
      <TopNav />

      <Causel />

      <TopService/>
    </>

  );
}
