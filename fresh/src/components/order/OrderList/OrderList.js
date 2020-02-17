import React from 'react'

import {fetchget} from '../../../utils/myfetch'
import { withRouter } from 'react-router-dom'

import { PullToRefresh } from 'antd-mobile';
import { List } from 'antd-mobile';
import { Icon, } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class OrderList extends React.Component{
    constructor(props){
        super(props)

        this.state={
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

    getData = async() => {
        let result = await fetchget('/api/orderlist/1/'+this.state.page)
        // console.log(result)
        this.setState((state)=>({
            goodlist:[...state.goodlist,...result],
        }))
        // console.log(this.state.goodlist)
    }

    async componentDidMount(){
        this.getData()
    }

    render(){
        return (<div>
            {
                this.state.goodlist.length ? this.renderGoods() : <Icon type="loading" />
            }
        </div>)
    }

    renderGoods=()=>{
        return (
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
                align="top" 
                thumb={item.img} 
                multipleLine
                onClick={()=>{
                    // this.setState({id:item.id})
                    this.props.history.push({ pathname: "/info" });
                }}
                >
                    {item.title}
                    <div className="left">
                        <span>￥{item.price}</span>
                    </div>
                </Item>
        })}         
    </List>
    </PullToRefresh>)
    }
}

export default withRouter(OrderList)