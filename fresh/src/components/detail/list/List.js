import React from 'react'
import './List.css'

import {fetchget} from '../../../utils/myfetch'
class List extends React.Component{
    constructor(props){
        super(props)

        this.state={
            list:{}
        }
    }

    async componentDidMount(){
        this.getData()
    }

    getData = async() =>{
        let result = await fetchget('/api/detail/info/1')
        // console.log(result)
        this.setState({list:result.data[0]})
        // console.log(this.state.list)
    }

    render(){
        return ( <div id="list">
            <div className='List-nav'>
                <div className="List-left">
                    <img src={this.state.list.img}></img>
                </div>
                <div className="List-right">
            <div className='List-right-title'>{this.state.list.title}</div>
                    <div className='List-right-subtitle'>{this.state.list.subTitle}</div>
                    <div className="third">
                        <div className="third-one">暂无评分</div>
                        <span>|</span>
                        <div>月售{this.state.list.mumber}</div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default List