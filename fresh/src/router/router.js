import React from 'react'
import { Switch, Route ,Redirect } from 'react-router-dom'

import Home from '../pages/home/Home'
import Order from '../pages/order/Order'
import Mine from '../pages/mine/Mine'
import Shopcar from '../pages/shopcar/Shopcar'
import Info from '../pages/detail/info'
import Search from '../pages/search/Search' 
import Login from '../pages/login/Login'

function RouterMap(){
    return (
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/order' component={Order}/>
            <Route path='/mine' strict component={Mine}/>
            <Route path='/shopcar' component={Shopcar}/>
            <Route path='/info' component={Info}/>
            <Route path='/search' component={Search}/>
            <Route path='/login' component={Login}/>
            <Redirect to="/" />
        </Switch>
)
}

export default RouterMap