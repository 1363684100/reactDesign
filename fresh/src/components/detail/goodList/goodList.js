import React from 'react'
import './goodList.css'
import {fetchget} from '../../../utils/myfetch'
import Star from '../star/star'

import { connect } from 'react-redux'
import {changeCarFn} from '../../../actions/action'


class GoodList extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            goodlist:[],
            one:true,
            two:false,
            comments:[],
            id:[],
            number:0
        }
    }

    async componentDidMount(){
        this.getData()
        this.getCommentsData()
    }

    getData = async() =>{
        let result = await fetchget('/api/detail/goods/1')
        // console.log(result)
        this.setState({goodlist:result.data})
        // console.log(this.state.data)
    }

    getCommentsData = async() =>{
        let result1 = await fetchget("/api/detail/comment/1/1")
        // console.log(result1)
        this.setState({comments:result1.data})
        // console.log(this.state.common)
    }


    handleClick = (name) =>{    
        if(this.state.id.includes(name)){
            return
        }else{
            this.state.id.unshift(name)
        }
        this.setState((state)=>({
            number:++state.number
        }))
        const {changeCarFn} = this.props
        changeCarFn(this.state.id)
    }

    handleClick2 = (name) =>{
        if(this.state.id.includes(name)){
            return this.state.id.shift(name)
        }
        this.setState((state)=>({
            number:--state.number
        }))
        const {changeCarFn} = this.props
        changeCarFn(this.state.id)
        // console.log(this.state.id,this)
    }

    render(){
        if (this.state.one) {
            return (<div>
                <div className="goodlist">
                    <div className='goodlist-left'>点菜</div>
                    <div className='goodlist-mid' onClick={()=>{
                                this.setState({one:false,two:true})
                            }}>评价</div>
                </div>
                    {this.state.goodlist.map((item,index)=>{
                        return (<div className='goodinfo' key={index}>
                            <div className='goodinfo-left'>
                                <img src={item.img}></img>
                            </div>
                            <div className='goodinfo-right'>
                                <div className='goodinfo-right-top'>{item.title}</div>
                                <div className='goodinfo-right-mid'>月售{item.mumber}</div>
                                <div className='goodinfo-right-bom'>￥{item.price}</div>
                                    <div className='goodinfo-shop'>
                                        <div className='goodinfo-shop-left' onClick={this.handleClick2.bind(this,item.id)}>-</div>
                                        <div className='goodinfo-shop-mid' key={index}>{this.state.number}</div>
                                        <div className='goodinfo-shop-right' onClick={this.handleClick.bind(this,item.id)}>+</div>
                                    </div>
                            </div>
                        </div>)
                    })}      
            </div>)
        }
        if(this.state.two){
            return (<div>
                <div className="goodlist">
                    <div className='goodlist-left' onClick={()=>{
                                this.setState({one:true,two:false})
                            }}>点菜</div>
                    <div className='goodlist-mid' >评价</div>
                </div>
                    {
                        this.state.comments.map((item, index) => {
                            return <div key={index} className='comments'>
                                <div>
                                    <div className='comments-top'>
                                        <span className="icon-user"></span>
                                        &nbsp;&nbsp;
                                        <span>{item.username}</span>
                                    </div>
                                    <div className='comments-mid'>
                                        <Star star={item.star}></Star>
                                    </div>
                                    <div className='comments-bom'>
                                        {item.comment}
                                    </div>
                                </div>  
                            </div>
                        })
                    }
            </div>)
        }     
    }
}

//将state状态映射到属性里面,之后可以通过props获取
const mapStatetoProps=(state)=>{
    // console.log(state)
    return { car:state.car }
}

//addFn 自动有了dispatch的功能 onClick={addFn} ; addFn  minusFn  minusFn会被映射到props里面
const mapDispatchToProps={changeCarFn}

export default connect(mapStatetoProps,mapDispatchToProps)(GoodList)