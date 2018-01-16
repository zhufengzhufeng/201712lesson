// 使用redux 流程
// 1.定义当前项目有什么功能(常量)
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
// 2.定义当前项目的默认状态，状态放到reducer中
//r({number:0},{type:INCREMENT,amount:3})
function reducer(state={number:0},action) {
  switch (action.type){ //匹配动作进行更改
    case INCREMENT:
      return {number:state.number+action.amount} // {number:3}
  }
  return state;
}
// 3.创建容器
let store = createStore(reducer); // store.getState() = {number:0}
// 4.可以在外面进行派发动作
// 默认渲染一次
function render() {
  text.innerHTML = store.getState().number
}
render(); //初始化
// 5.订阅状态
store.subscribe(render);//当状态变化时触发render函数
add.addEventListener('click',function () {
  store.dispatch({type:INCREMENT,amount:3}); //修改状态
},false);