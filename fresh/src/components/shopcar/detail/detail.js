import React from 'react'
import './detail.css'
import {fetchget} from '../../../utils/myfetch'

import { connect } from 'react-redux'
import {changeCarFn} from '../../../actions/action'

class CDetail extends React.Component{
    constructor(props){
        super(props)
        
        this.state={
            detailList:[],
            carList:[]
        }
    }

    async componentDidMount(){
        this.getData()
    }

    getData = async() =>{
        let result = await fetchget('/api/detail/goods/1')
        // console.log(result)
        this.setState({detailList:result.data})
        // console.log(this.state.detailList)
    }

    // handleClick = (name) =>{    
    //     if(this.state.id.includes(name)){
    //         return
    //     }else{
    //         this.state.id.unshift(name)
    //     }
    //     // this.setState((state)=>({
    //     //     number:++state.number
    //     // }))
    //     const {changeCarFn} = this.props
    //     changeCarFn(this.state.id)
    // }

    // handleClick2 = (name) =>{
    //     if(this.state.id.includes(name)){
    //         return this.state.id.shift(name)
    //     }
    //     this.setState((state)=>({
    //         number:--state.number
    //     }))
    //     const {changeCarFn} = this.props
    //     changeCarFn(this.state.id)
    //     // console.log(this.state.id,this)
    // }

    render(){
        // console.log(this.props)
        if(this.props.car){
            this.state.detailList.map((item,index)=>{
                if(this.props.car.includes(item.id)){
                    this.state.carList.unshift(item)
                }
            })
            return (<div>
                {this.state.carList.map((item,index)=>{
                        return (<div className='carinfo' key={index}>
                            <div className='carinfo-left'>
                                <img src={item.img}></img>
                            </div>
                            <div className='carinfo-right'>
                                <div className='carinfo-right-top'>{item.title}</div>
                                <div className='carinfo-right-bom'>￥{item.price}</div>
                                <div className='goodinfo-shop'>
                                        <div className='goodinfo-shop-left' >-</div>
                                        <div className='goodinfo-shop-right'>+</div>
                                    </div>
                            </div>
                        </div>)
                    })} 
            </div>)
        }else{
            return (<div>购物车空空如也</div>)
        }
        
    }
}


const mapStatetoProps=(state)=>{
    // console.log(state)
    return { car:state.car }
}

//addFn 自动有了dispatch的功能 onClick={addFn} ; addFn  minusFn  minusFn会被映射到props里面
const mapDispatchToProps={changeCarFn}

export default connect(mapStatetoProps,mapDispatchToProps)(CDetail)