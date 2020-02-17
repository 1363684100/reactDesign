import React from 'react'
import { TabBar } from 'antd-mobile';
import '../../static/css/font.css'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import {changeCarFn} from '../../actions/action'


class RTab extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selectedTab: 'home',
            hidden: false,
            fullScreen: false,
            number:0
        };
    }
    render(){
        console.log(this.props)
        return(<div>
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
        >
            <TabBar.Item
                title="主页"
                key="home"
                icon={<div style={{
                    fontFamily: 'icomoon',
                    fontSize: '18px',
                    width: '22px',
                    height: '22px',
                }} className="icon-picture-o"
                />
                }
                selectedIcon={<div style={{
                    fontFamily: 'icomoon',
                    fontSize: '18px',
                    width: '22px',
                    height: '22px',
                    // fontSize: '18px',
                }} className="icon-picture-o"
                />
                }
                selected={this.state.selectedTab === 'home'}
                // badge={1}
                onPress={() => {
                    this.setState({
                        selectedTab: 'home',
                    });
                    //跳转路由
                    this.props.history.push({ pathname: "/" });
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                title="订单"
                key="fenleo"
                icon={<div style={{
                    fontFamily: 'icomoon',
                    fontSize: '18px',
                    width: '22px',
                    height: '22px',
                }} className="icon-star"
                />
                }
                selectedIcon={<div style={{
                    fontFamily: 'icomoon',
                    fontSize: '18px',
                    width: '22px',
                    height: '22px',
                    // fontSize: '18px',
                }} className="icon-star"
                />
                }
                selected={this.state.selectedTab === 'order'}
                // badge={1}
                onPress={() => {
                    this.setState({
                        selectedTab: 'order',
                    });
                    //跳转路由
                    this.props.history.push({ pathname: "/order" });
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                icon={
                    <div style={{
                        fontFamily: 'icomoon',
                        fontSize: '18px',
                        width: '22px',
                        height: '22px',
                    }} className="icon-user"
                    />
                }
                selectedIcon={
                    <div style={{
                        fontFamily: 'icomoon',
                        fontSize: '18px',
                        width: '22px',
                        height: '22px',
                    }} className="icon-user"
                    />
                }
                title="购物车"
                key="shopcar"
                selected={this.state.selectedTab === 'shopcar'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'shopcar',
                    });
                    this.props.history.push({ pathname: "/shopcar" });
                }}
            >
            </TabBar.Item>
            <TabBar.Item
                icon={
                    <div style={{
                        fontFamily: 'icomoon',
                        fontSize: '18px',
                        width: '22px',
                        height: '22px',
                    }} className="icon-user"
                    />
                }
                selectedIcon={
                    <div style={{
                        fontFamily: 'icomoon',
                        fontSize: '18px',
                        width: '22px',
                        height: '22px',
                    }} className="icon-user"
                    />
                }
                title="我的"
                key="mine"
                selected={this.state.selectedTab === 'mine'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'mine',
                    });
                    this.props.history.push({ pathname: "/mine" });
                }}
            >
            </TabBar.Item>
        </TabBar>
        <div style={{
            width:'15px',
            height:'16px',
            textAlign:'center',
            position:'absolute',
            left:'63%',
            top:'92%',
            color:'black',
            backgroundColor:'red',
            border:'1px solid red',
            borderRadius:'50%'
        }}>{this.props.car.length}</div>
        </div>)
    }
    
}
const mapStatetoProps=(state)=>{
    return { car:state.car }
}

//addFn 自动有了dispatch的功能 onClick={addFn} ; addFn  minusFn  minusFn会被映射到props里面
const mapDispatchToProps={changeCarFn}

export default connect(mapStatetoProps,mapDispatchToProps)(withRouter(RTab))