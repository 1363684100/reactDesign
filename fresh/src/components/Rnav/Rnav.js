import React from 'react'
import { NavBar, Icon ,SearchBar} from 'antd-mobile';
import './RNav.css'
import {withRouter} from "react-router-dom";
class RNav extends React.Component{
  constructor(props){
    super(props)
    
    this.state={
      value:''
    }
  }

  render(){
    return(<NavBar
      mode="dark"
      leftContent={<div>深圳<Icon type="down" /></div>}
      onLeftClick={() => this.props.history.push({pathname:"/city",query: { title : '城市选择' }})}
      rightContent={<span key="1" style={{fontFamily:"icomoon"}} className="icon-user"/>}
    ><SearchBar value={this.state.value} onSubmit={(value)=>this.keyUpHandle(value)} onChange={(value)=>this.onChange(value)} placeholder="Search" ref={ref => this.autoFocusInst = ref} maxLength={8} /></NavBar>)
  }
    
  onChange = (value)=>{
    this.setState({ value });
  }

  //当键盘弹起的时候
  keyUpHandle = (value)=>{
      this.props.history.push({pathname:"/search/all/" + encodeURIComponent(value)});
  }
}
export default withRouter(RNav)