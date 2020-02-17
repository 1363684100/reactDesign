import React from 'react'
import { List, InputItem } from 'antd-mobile';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux'
import {changeUserFn} from '../../actions/action'

class Lhome extends React.Component{
    constructor(props){
        super(props)

        this.state={
            userName:''
        }
        this.textInput=React.createRef()
    }

    changeData = (e) => {
        this.setState({userName:e})
        // console.log(this.state.userName)
    }

    handleClick(name){     
        const {changeUserFn} = this.props
        changeUserFn(name)
        this.props.history.go(-1);
    }

    render(){
        if(this.props.username){
          return (<List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={this.handleClick.bind(this,this.state.userName)}
            >
              注销
            </div>
          </List.Item>)
        }else{
          return (<List renderHeader={() => '没有账号登陆同时会自动注册'}>
        <InputItem
          clear
          placeholder="请输入账号"
        //   ref={this.textInput}
        //   defaultValue={this.props.default}
          onChange={(e)=>this.changeData(e)}
        >账号:</InputItem>
        <InputItem
          clear
          placeholder="请输入密码"
        >密码:</InputItem>
        <List.Item>
          <div
            style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
            onClick={this.handleClick.bind(this,this.state.userName)}
          >
            登陆
          </div>
        </List.Item>
      </List>)
        }
        
    }
}

//将state状态映射到属性里面,之后可以通过props获取
const mapStatetoProps=(state)=>{
    return { username:state.username }
}

//addFn 自动有了dispatch的功能 onClick={addFn} ; addFn  minusFn  minusFn会被映射到props里面
const mapDispatchToProps={changeUserFn}

export default connect(mapStatetoProps,mapDispatchToProps)(withRouter(Lhome))