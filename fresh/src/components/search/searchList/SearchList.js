import React from 'react'

import { withRouter } from 'react-router-dom'
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

function SearchList(props){
    // console.log(props)
    return (<div>
        <List className="my-list">
                    {props.searchList.map((item,index)=>{
                        return <Item key={index}
                            extra={<div>{item.distance} <div className="right"><span>已售{item.mumber}</span></div> </div>} 
                            align="top" 
                            thumb={item.img} 
                            multipleLine
                            onClick={()=>{
                                // this.setState({id:item.id})
                                props.history.push({ pathname: "/info" });
                            }}
                            >
                                {item.title} <Brief>{item.subTitle}</Brief>
                                <div className="left">
                                    <span>￥{item.price}</span>
                                </div>
                            </Item>
                    })}         
                </List>
    </div>)
    
}

export default withRouter(SearchList)