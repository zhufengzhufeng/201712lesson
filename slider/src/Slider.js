import React from 'react';
import SliderList from "./SliderList";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
export default class Slider extends React.Component {
  constructor(){
    super();
    this.state = {index:0} //表示当前是第几张
  }
  go =(step)=>{ // 去哪 传入要动几个
    let index = this.state.index+step; //先加的
    if(index === this.props.items.length){ //当等于最后一张时 越界回到0
      index = 0;
    }
    if(index<0){ // 当小于第一张时 回到最后一张
      index = this.props.items.length - 1;
    }
    this.setState({
      index
    });
  };
  turn = () =>{ // 轮播
    this.timer = setInterval(()=>{
      this.go(1);
    },this.props.delay*1000);
  };
  componentDidMount(){ //页面加载完成后 看是否需要自动轮播
    if(this.props.autoplay){
        this.turn();
    }
  }
  render(){
    console.log(1)
    return (
      <div className="slider-container" onMouseEnter={()=>{
        clearInterval(this.timer);
      }} onMouseLeave={()=>{this.turn();}}>
        <SliderList index={this.state.index} items={this.props.items} speed={this.props.speed}/>
        {this.props.arrows?<SliderArrows go={this.go}/>:null}
        {this.props.dots?<SliderDots go={this.go} items={this.props.items} index={this.state.index}/>:null}
      </div>

    )
  }
}
