import React from 'react';
import './index.css'
import { withRouter } from 'react-router-dom'
function TopService(props) {
    console.log(props.shopcaft.AdData)
    var data = [{
        info: "保障服务",
        className: "iconfont icon-shouye"
    }, {
        info: "企业团购",
        className: "iconfont icon-qiye"
    }, {
        info: "F码通道",
        className: "iconfont icon-shouye"
    }, {
        info: "米粉卡",
        className: "iconfont icon-simqia"
    }, {
        info: "以旧换新",
        className: "iconfont icon-huanyihuan"
    }, {
        info: "话费充值",
        className: "iconfont icon-huafei"
    }]
    return (
        <div className='TopServiceBox'>
            {/* 左侧 */}
            <div className="channelBox">
                {
                    data.map((item, index) => {
                        return (
                            <div className="channelItem" key={index}>
                                <div className="fontBox">
                                    <i className={item.className}></i>
                                    <p>{item.info}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            {/* 右侧 */}
            <div className="homePadAd">
                {
                    props.shopcaft.AdData.curselad.map((item,index)=>{
                        console.log(item)
                        return(
                            <div className="homeitem" key={index}>
                            <img src={item.goods_src} alt="" />
                            
                        </div>
                        )
                    })
                   
                }
                

            </div>

        </div>
    )
}
export default withRouter(TopService)
