import React from 'react';
export default class Slider extends React.Component {
  render(){
    return (
      <div className="slider-container">
        <ul>
          {this.props.items.map((item,index)=>(
            <li><img src={item.src} alt="" key={index}/></li>
          ))}
        </ul>
      </div>
    )
  }
}
