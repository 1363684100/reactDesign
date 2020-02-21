import React from 'react'

import DNav from '../../components/detail/DNav/DNav'
import List from '../../components/detail/list/List'
import GoodList from '../../components/detail/goodList/goodList'

import {withRouter} from "react-router-dom";

class Info extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (<div>
            <DNav></DNav>
            <List></List>
            <GoodList></GoodList>
        </div>)
    }
}

export default withRouter(Info)