import React from 'react'

import {fetchget} from '../../utils/myfetch'
import { connect } from 'react-redux'
import {changeCityFn} from '../../actions/action'

import Rnav from '../../components/Rnav/Rnav'
import Ad from '../../components/home/ad/Ad.js'
import Carousel from '../../components/home/carousel/Carousel'
// import GridExample from '../../components/home/gird/Gird'
import Goods from '../../components/home/goodList/GoodList'
class Home extends React.Component{
    constructor(props){
        super(props)

        this.state={
            ads:[]
        }
    }

    async componentDidMount(){
        let result = await fetchget("/api/homead") 
        this.setState({ads:result})
        // console.log(this.state.ads,"111")
    }

    render(){
        return (<div>
            <Rnav></Rnav>
            <Carousel></Carousel>
            {/* <GridExample></GridExample> */}
            <Ad adList={this.state.ads}></Ad>
            <Goods></Goods>
        </div>)
    }
}
const mapStatetoProps=(state)=>{
    return {num:state.counter,city:state.city}
}
const mapDispatchToProps={changeCityFn}

export default connect(mapStatetoProps,mapDispatchToProps)(Home)