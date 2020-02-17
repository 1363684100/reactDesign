import React from 'react'

import FNav from '../../components/order/FNav/FNav'
import GoodList from '../../components/order/OrderList/OrderList'

class Order extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (<div>
            <FNav></FNav>
            <GoodList></GoodList>
        </div>)
    }
}

export default Order