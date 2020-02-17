import React from 'react'
import { Grid } from 'antd-mobile';

function GridExample(){
    const txt = ['水果','蔬菜','肉禽蛋类','海鲜水产','粮油调料','熟食卤肉','牛奶面包','酒水']
    const data =txt.map((_val, i) => ({
        icon: require('./img/'+i+'.jpg'),
        text: _val,
      }));

      return (<div>
            <Grid data={data} hasLine={false} itemStyle={{ height: '60px'}}/>
        </div>)
}

export default GridExample