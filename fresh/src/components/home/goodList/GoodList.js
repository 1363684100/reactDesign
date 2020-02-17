import React from 'react'
import './goodlist.less'

import { connect } from 'react-redux'
import {changeCityFn} from '../../../actions/action'

import { withRouter } from 'react-router-dom'

import { PullToRefresh } from 'antd-mobile';
import { Icon, } from 'antd-mobile';
import { List } from 'antd-mobile';

import {fetchget} from '../../../utils/myfetch'

const Item = List.Item;
const Brief = Item.Brief;



class GoodList extends React.Component {
    constructor(props, context) {
        super(props,context)

        this.state = {
            page: 1,
            goodlist: [],
            //refreshing表示当前是否正在刷新
            refreshing: false,
            //表示是否向下拉开启刷新
            down: false,
            //文档的高度
            height: document.documentElement.clientHeight,
        }
    }

    async componentDidMount(){
        // let result = await fetchget('/api/homelist/' + encodeURIComponent(this.props.city) + '/' + this.state.page)
        // this.setState({goodlist:result.data,hasMore:result.hasMore})
        this.getData()
    }

    getData = async () =>{
        let result = await fetchget('/api/homelist/' + encodeURIComponent(this.props.city) + '/' + this.state.page)
        // console.log(result,"1111111")
        this.setState((state)=>({
            goodlist:[...state.goodlist,...result.data],
            hasMore:result.hasMore
        }))
    }

    render() {
        return <div>
            {
                this.state.goodlist.length ? this.renderGoods() : <Icon type="loading" />
            }
        </div>
    }


    renderGoods=() =>{
        return <div>
            <h2 className="home-list-title">猜你喜欢</h2>
            <PullToRefresh 
                damping={60}
                ref={el => this.ptr = el}
                style={{
                    //指定PullToRefresh的高度
                    height: this.state.height-100,
                    overflow: 'auto',
                }}
                //拉动刷新指示的提示信息
                indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                //控制拉动的方向的
                direction={this.state.down ? 'down' : 'up'}
                //当前是否正在刷新
                refreshing={this.state.refreshing}
                //拉动刷新的执行的回调函数
                onRefresh={() => {
                    this.setState({ refreshing: true });
                    //请求服务器获取第二页的数据
                    this.setState((state)=>{
                        return{
                            page:state.page+1
                        }
                    },()=>{
                        this.getData();
                    })
                }}>
                <List className="my-list">
                    {this.state.goodlist.map((item,index)=>{
                        return <Item key={index}
                            extra={<div>{item.distance} <div className="right"><span>已售{item.mumber}</span></div> </div>} 
                            align="top" 
                            thumb={item.img} 
                            multipleLine
                            onClick={()=>{
                                // this.setState({id:item.id})
                                this.props.history.push({ pathname: "/info" });
                            }}
                            >
                                {item.title} <Brief>{item.subTitle}</Brief>
                                <div className="left">
                                    <span>￥{item.price}</span>
                                </div>
                            </Item>
                    })}         
                </List>
            </PullToRefresh>
        </div>
    }
}

const mapStatetoProps=(state)=>{
    return {city:state.city}
}
const mapDispatchToProps={changeCityFn}

export default connect(mapStatetoProps,mapDispatchToProps)(withRouter(GoodList))