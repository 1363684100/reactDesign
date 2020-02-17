import React from 'react'
import './ad.less'

function Ad(props){
    // console.log(props.adList)
    return (<div id="home-ad">
    <h2>超值特惠</h2>
    <div className="ad-container clear-fix">
        {props.adList.map((item, index) => {
            return <div key={index} className="ad-item float-left">
                <a href='#'>
                    <img src={require(item.img+'')} alt={item.title}/>
                </a>
            </div>
        })}
    </div>
</div>)
}

export default Ad