import React from 'react'
import { Icon } from 'antd-mobile';
import './DNav.css'

import {withRouter} from "react-router-dom";

// import { connect } from 'react-redux'

function DNav(props){
    return (<div className="DNav">
        <div onClick={()=>{
            props.history.go(-1);
        }}><Icon type="left" /></div>
        <div className="am-navbar-title1"></div>
        <div className="am-navbar-right1">
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />
        </div>
    </div>)
}

export default withRouter(DNav)