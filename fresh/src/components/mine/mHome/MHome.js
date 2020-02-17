import React from 'react'

import './MHome.css'

class MHome extends React.Component{
    constructor(props){
        super(props)

        this.state={
            adList:[
                {
                    picUrl:
                      "http://p1.meituan.net/50.0.100/xianfu/9c1388ba5fbb367c1a93996f39c2fba94506.jpg",
                    name: "我的收藏"
                  },
                  {
                    picUrl:
                      "http://p1.meituan.net/50.0.100/xianfu/7ad7da19bfadd5e6081b7606025214254582.jpg",
                    name: "我的足迹"
                  },
                  {
                    picUrl:
                      "http://p0.meituan.net/50.0.100/xianfu/5d02f44df0f9f26ea0eca95957824bae4444.jpg",
                    name: "我的评价"
                  },
                  {
                    picUrl:
                      "http://p1.meituan.net/50.0.100/xianfu/bbae84a587711ac12badb9453406ad694851.jpg",
                    name: "我的好友"
                  },
                  {
                    picUrl:
                      "http://p1.meituan.net/50.0.100/xianfu/5c1bf832376403ca2ab22b8d8748e0fd5479.jpg",
                    name: "答谢记录"
                  },
                  {
                    picUrl:
                      "http://p0.meituan.net/50.0.100/xianfu/a813bff1813024b05ff45422deac24bd4276.jpg",
                    name: "我的地址"
                  }
            ],
            adList2:[
                {
                    name: "红包",
                    picUrl:
                      "http://p1.meituan.net/50.0.100/xianfu/a361ce97f9f00f2715bb960a789d925e2315.jpg"
                  },
                  {
                    name: "代金券",
                    picUrl:
                      "http://p0.meituan.net/50.0.100/xianfu/875f13a76045b7f6862a2b7149babec32329.jpg"
                  },
                  {
                    name: "钱包",
                    picUrl:
                      "http://p1.meituan.net/50.0.100/xianfu/2c14b3425c7bf1f3d63d11f47a7ef9ea2230.jpg"
                  },
                  {
                    name: "余额",
                    picUrl:
                      "http://p0.meituan.net/50.0.100/xianfu/7b3e3fb4fc9b45dcda74d7e916f025ea2878.jpg"
                  }
            ],
            adList3: [
                {
                  picUrl:
                    "http://p0.meituan.net/50.0.100/xianfu/cf5ddfcae114ed8d7d147d51064532252477.jpg",
                  name: "邀请有奖"
                },
                {
                  picUrl:
                    "http://p1.meituan.net/50.0.100/xianfu/55748d5fa531a057258f68d029fe20542466.jpg",
                  name: "商家入驻"
                },
                {
                  picUrl:
                    "http://p1.meituan.net/50.0.100/xianfu/317aabdd31dfcfa1739149089a2e041a2780.jpg",
                  name: "帮助与反馈"
                },
                {
                  picUrl:
                    "http://p0.meituan.net/50.0.100/xianfu/55454d4faaed6ad212b2b8a929edef372425.jpg",
                  name: "在线客服"
                }
              ]
        }
    }

    render(){
        return (<div>
                    <div className="mhome-one">
                        {this.state.adList.map((item, index) => {
                            return <div key={index} className="mhome-one-top">
                                <img src={item.picUrl} alt=''/>
                                <span>{item.name}</span>
                            </div>
                        })}
                    </div>

                    <div className='mhome-two-title'>我的资产</div>
                    <div className="mhome-two">
                        {this.state.adList2.map((item, index) => {
                            return <div key={index} className="mhome-two-top">
                                <img src={item.picUrl} alt=''/>
                                <span>{item.name}</span>
                            </div>
                        })}
                    </div>

                    <div className='mhome-two-title'>更多推荐</div>
                    <div className="mhome-two">
                        {this.state.adList3.map((item, index) => {
                            return <div key={index} className="mhome-two-top">
                                <img src={item.picUrl} alt=''/>
                                <span>{item.name}</span>
                            </div>
                        })}
                    </div>
            </div>)
    }
}

export default MHome