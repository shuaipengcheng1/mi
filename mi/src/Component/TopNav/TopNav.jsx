import React, { useRef, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import './index.css'


function Test(props, R) {

    useEffect(() => {
        console.log(props)
        //  获取登录状态
        console.log(props.shopcaft.LoginSet)


        //  获取用户信息
        console.log(props.shopcaft.ShopCaftReducer)
        console.log(props.shopcaft.UserReducer)
        // 获取侧栏
        console.log(props.shopcaft.SideNav)


    }, [])
    var down = useRef(null);
    var Nav = useRef();
    // 鼠标移出的动画
    var DownLoad_Leave = function () {
        //img 
        down.current.children[1].children[0].children[0].style.height = 90 + 'px'
        //  download框
        down.current.children[1].style.height = 148 + "px"

        //   修改大小
        console.log(down.current.children[1].children[0].children[0].style.height)
        // 
        var img = parseInt(down.current.children[1].children[0].children[0].style.height)
        var download = parseInt(down.current.children[1].style.height)
        // 在0,2s内修改为0
        var timer = setInterval(() => {
            // 每0,01s减4.5
            img -= 4.5;
            // 每0.01s减14.8
            download -= 14.8;
            if (download <= 148 - 14.8 * 3) {
                //img 
                down.current.children[1].children[0].children[0].style.height = img + 'px'
            }

            //  download框
            down.current.children[1].style.height = download + "px"
            if (parseInt(down.current.children[1].children[0].children[0].style.height) <= 0) {
                //   关闭定时器
                clearInterval(timer)
            }
        }, 10);


        console.log("移出", down)


    }
    var nu = () => {

    }

    var show = (e) => {
        // Nav.current.children[0].style.display="flex"
        // console.log()
        // 事件对象
        e.target.children[0].style.display = "flex"
    }
    var out = (e) => {
        if (e.target.className !== 'item list') {
            console.log(this)
            FindClass(e)
        } else {
            e.target.children[0].style.display = "none"

        }

    }

    // 寻找类名递归
    var FindClass = (data) => {

        if (data.target === undefined) {






            if (data.parentNode.className === "NavTab") {

                data.parentNode.style.display = 'none';
            } else {


                FindClass(data.parentNode)
            }
        } else {

            if (data.target.className === "iconfont icon-youjiantou") {
                data.target.parentNode.children[0].style.display = 'none'
                return
            }

            if (data.target.parentNode.className === "NavTab") {

                data.target.parentNode.style.display = 'none';
            } else {


                FindClass(data.target.parentNode)
            }
        }





    }


    // 数组
    var ListArr_Left = [
        "小米商城", "MIUI", "loT", "云服务", "天星数科", "有品", "小爱开放平台", "企业团购", "资质证照", "协议规则", "下载app", "Select Location"
    ]
    var ListArr_Rigth = [
        "登录", '注册', '消息通知'
    ]
    // 展示div
    var showBox = useRef()

    var TopSearch = ['Xiaomi手机', 'Readmi', '电视', "笔记本", '平板', '家电', '路由器', '服务', '社区']
    // 进入事件
    var [Pull, SetPull] = useState([]);
    var In = (e) => {
        // console.log()
        //  PullList("RedMi")
        var state
      
        switch (e.target.innerText) {
            case 'Xiaomi手机': state = "XiaoMi"; break;
            case 'Readmi': state = "RedMi"; break;

            case '电视': state = "Tv"; break;
            case '笔记本': state = "LapTop"; break;
            case '平板': state = "Pad"; break;
            case '家电': state = "JiaDian"; break;
            case '路由器': state = "Router"; break;

        }
        if(e.target.innerText=="服务"||e.target.innerText=="社区"){
        
        showBox.current.style.height = 0 + "px"
        return
    }
        // 检查缓存数组有没有对应的值
        var cache = props.shopcaft.CacheArr;
        console.log(cache)
        cache.forEach(element => {
            if (Object.keys(element)[0] == state) {
                //   使用缓存
                //   有缓存
                console.log("使用缓存", element)
                SetPull(Pull = element[state])
                return

            }
        });
        //   无缓存
        const params = new URLSearchParams();
        params.append('type', state);
        axios.post("/getPull", params).then(v => {
            console.log(v.data)
            //    获取数据
            SetPull(Pull = v.data)
            // 加入缓存  类型为key 内容为value
            // 循环缓存数据库 去重
            cache.forEach((item, index) => {
                if (Object.keys(item)[0] == state) {
                    // 删除
                    cache.splice(index, 1);
                }
            })
            var obj = {
                [state]: Pull
            }
            props.setCache(obj);
        })

        // 
        // showBox.current.style.display="block"
        showBox.current.style.height = 230 + "px"


        //   console.log(  props.shopcaft.PullList)

    }
    var Out = () => {
        // showBox.current.style.display="none"
        showBox.current.style.height = 0 + "px"
    }

    return (
        <div className='container'>
            {/* 最顶部的内容 */}
            <div className='TopNav'>
                <div className='TopNav_Box'>
                    {/* 左侧 */}
                    <div className="TopNav_Left">
                        {
                            ListArr_Left.map((item, index) => {
                                return (
                                    <div key={index} className={item === "下载app" ? 'NavItem download' : 'NavItem'} onMouseLeave={item === "下载app" ? DownLoad_Leave : nu} ref={item === "下载app" ? down : null}>
                                        {item}
                                        {(index === ListArr_Left.length - 1 ? '' : <span className='sep'>|</span>)}
                                        {item === "下载app" ? <div className='pull_Download'>
                                            <div className="imgbox">
                                                <img src="http://395789ob20.zicp.vip:31004/Code/download.png" alt="" />
                                            </div>
                                            <div className="info">
                                                小米商城APP
                                            </div>
                                        </div> : ''
                                        }
                                    </div>


                                )
                            })
                        }
                    </div>

                    {/* 右侧 */}
                    <div className="TopNav_Rigth">
                        {/* 宽度120 3个字体 */}
                        <div className="Rigth_Nav">
                            {
                                ListArr_Rigth.map((item, index) => {
                                    return (
                                        <Link key={index} to={item === "登录" ? "/login" : "#"}>
                                            <div key={index} className='NavItem'>
                                                {item}
                                                {(index === ListArr_Rigth.length - 1 ? '' : <span className='sep'>|</span>)}
                                            </div>
                                        </Link>



                                    )
                                })
                            }
                        </div>
                        {/* 购物车 */}
                        <div className="shopcar iconfont">
                            &#xe70b; 购物车
                        </div>
                    </div>
                </div>
            </div>

            {/* 导航栏内容 */}
            <div className='TopSearch'>
                {/* 中间 1226px */}
                <div className="TopSearchBox">

                    {/* Logo */}
                    <div className="mi_logo">
                        <img src="http://395789ob20.zicp.vip:31004/logo/logo.png" alt="" />

                    </div>
                    {/* 导航内容 */}
                    <div className="leftSide">
                        {/* 第一个div的内容是侧栏的内容 */}
                        <div className="Side">
                            {/* 侧栏 */}
                            <div className="SideNav">
                                {/* 绑定父元素 通过冒泡机制获取事件对象 */}
                                <ul className='NavList' ref={Nav}>
                                    {
                                        props.shopcaft.SideNav.map((item, index) => {
                                            //   循环获取列名
                                            var ListName = Object.keys(item)
                                            //    根据key获取对于的数组
                                            var resultArr = item[ListName]
                                            // 计算宽度
                                            var w = resultArr.length % 2 === 0 ? resultArr.length : resultArr.length + 1
                                            if (w % 6 !== 0) {
                                                w = parseInt(w / 6) + 1;

                                            } else {
                                                w = w / 6;
                                            }

                                            // console.log(w)
                                            return (
                                                <li className='item list' key={index} onMouseEnter={show} onMouseLeave={out} >
                                                    {ListName}
                                                    <div className="NavTab" style={{ width: w * 265 + "px" }} key={Math.random()}>

                                                        {
                                                            resultArr.map((item, key) => {
                                                                return (
                                                                    <div className="item" key={Math.random()}>

                                                                        {
                                                                            <div key={Math.random()}>
                                                                                <div className="img">
                                                                                    <img src={item.goods_src} alt="" />
                                                                                </div>
                                                                                <div className="info">
                                                                                    {item.goods_name}
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    </div>

                                                                )
                                                            })
                                                        }
                                                    </div>

                                                    <i className='iconfont icon-youjiantou'></i>
                                                </li>
                                            )

                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        {/* 导航 */}
                        <div className="serchBox" onMouseLeave={Out}>
                            {/* 循环数组 */}
                            {
                                TopSearch.map((item, index) => {
                                    return (
                                        <a key={index} href="#">
                                            <div className="item" onMouseEnter={In}>
                                                {item}
                                            </div>
                                        </a>
                                    )
                                })
                            }
                            <div className="ShowBox" ref={showBox}  >
                                <div className="itemBox" >
                                    {
                                        Pull.map((item, index) => {
                                            return (
                                                <div className={index == 0 ? "item first" : "item"} key={index}>
                                                    <div className="imgbox" >
                                                        <img src={item.goods_src} alt="" />
                                                    </div>
                                                    <div>{item.goodsName}</div>
                                                    <p>{item.goods_price}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* 搜索 */}
                    <div className="header-search">
                        <input type="text" placeholder='热点内容' />
                        <div className='searchBtn'>
                            <i className='iconfont'>&#xe651;</i>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}
export default withRouter(Test)