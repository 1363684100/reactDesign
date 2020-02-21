import React from 'react'

import MNav from '../../components/mine/MNav/MNav'
import ToLogin from '../../components/mine/toLogin/ToLogin'
import MHome from '../../components/mine/mHome/MHome'

class Mine extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (<div>
            <MNav></MNav>
            <ToLogin></ToLogin>
            <MHome></MHome>
        </div>)
    }
}
export default Mine