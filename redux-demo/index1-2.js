function createStore(r) {
  let state; //此时默认还是undefined
  function dispatch(action) { //派发
    state = r(state,action);
    listeners.forEach(item=>item());
  }
  let listeners = [];// 存放所有的监听函数
  let subscribe = (fn)=>{
    listeners.push(fn);
    return ()=>{ //取消绑定的函数，调用可以删除函数
      listeners = listeners.filter(item=>item!==fn);
    }
  };
  dispatch({});//目的是用用户的状态覆盖掉自身的状态
  let getState = () => JSON.parse(JSON.stringify(state));
  return {getState,dispatch,subscribe}
}
const CHANGE_TITLE = 'change_title';
function reducer(state={title:'标题'},action) {
  switch (action.type){
    case CHANGE_TITLE:
      return {...state,title:action.content}
  }
  return state;
}
let store = createStore(reducer);
function render() {
  document.querySelector('.title').innerHTML = store.getState().title
}
render();
store.subscribe(render);
let unSubscribe = store.subscribe(function () {
  alert(1)
});
setTimeout(function () {
  store.dispatch({type:CHANGE_TITLE,content:'珠峰'});
  unSubscribe();
},2000);

setTimeout(function () {
  store.dispatch({type:CHANGE_TITLE,content:'珠1峰'});
},3000);

// 纯函数 输入一定输出一定  Math.random()返回的结果不一定就不是纯函数