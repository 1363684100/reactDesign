import React from 'react'
import { NavBar } from 'antd-mobile';
import { Icon } from 'antd-mobile';
import {withRouter} from "react-router-dom";
function LNav(props){
    return ( <div>
        <NavBar
          mode="dark"
          leftContent={<div onClick={()=>{props.history.go(-1)}}><Icon type="left" /></div>}
        >登陆/注册</NavBar>
      </div>)
}
export default withRouter(LNav)