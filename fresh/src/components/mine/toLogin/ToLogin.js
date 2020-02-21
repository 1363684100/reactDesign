import React from 'react'

import './ToLogin.css'
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import {changeUserFn} from '../../../actions/action'

function ToLogin(props){
    // console.log(props)
    if(props.username){
        return (<div>
            <div className='toLogin'>
                <img src={require('./image/1.JPG')} className="img" alt=''></img>
                <span
                onClick={() => props.history.push({pathname:"/login"})}
                className="toLogin-right"
                >{props.username}</span>
            </div>
        </div>)
    }else{
        return (<div>
            <div className='toLogin'>
                <div className="img"></div>
                <span
                onClick={() => props.history.push({pathname:"/login"})}
                className="toLogin-right"
                >登陆/注册</span>
            </div>
        </div>)
    }
       
}

//将state状态映射到属性里面,之后可以通过props获取
const mapStatetoProps=(state)=>{
    return { username:state.username }
}

//addFn 自动有了dispatch的功能 onClick={addFn} ; addFn  minusFn  minusFn会被映射到props里面
const mapDispatchToProps={changeUserFn}

export default connect(mapStatetoProps,mapDispatchToProps)(withRouter(ToLogin))