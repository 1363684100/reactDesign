import React from 'react'

import {fetchget} from '../../utils/myfetch'

import SNav from '../../components/search/SNav'
import SearchList from '../../components/search/searchList/SearchList'

class Search extends React.Component{
    constructor(props){
        super(props)

        this.state={
            search:[]
        }
    }

    getData = async() =>{
        let result = await fetchget('/api/search/1/无锡/1')
        // console.log(result)
        this.setState({search:result.data})
        // console.log(this.state.search)
    }

    async componentDidMount(){
        this.getData()
    }

    render(){
        return(<div>
            <SNav></SNav>
            <SearchList searchList={this.state.search}></SearchList>
        </div>)
    }
}

export default Search