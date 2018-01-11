import React from 'react';
export default class SliderList extends React.Component {
  render(){
    let style = {
      width:this.props.items.length*400+'px', //设置ul默认宽度
      left:this.props.index*400*-1 + 'px', //根据当前index 移动left值
      transition:`left ${this.props.speed}s linear`
    };
    return (
      <ul style={style}>
        {this.props.items.map((item,index)=>(
          <li key={index}><img src={item.src} /></li>
        ))}
      </ul>
    )
  }
}
