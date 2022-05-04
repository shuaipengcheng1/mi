import React from 'react';
import { Carousel } from 'antd'
import { withRouter } from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios'
import './index.css'
function Causel(props) {
    var [data,setData] = useState([]);
    useEffect(() => {
        axios({
            method: "GET",
            url: "/getCursel"
        }).then((v) => {
           setData (data = v.data.cursel)
        //    存储到redux中
        console.log(props)
           props.setCausel(v.data);
        })
    }, [])
    return (
        <Carousel effect="fade" autoplay>
            {
                data.map((item, index) => {
                    return (
                        <div className="CurselBox" key={index}>
                            <img src={item.goods_src} alt="" />
                        </div>
                    )
                })

            }
        </Carousel>

    )

}
export default withRouter(Causel);
