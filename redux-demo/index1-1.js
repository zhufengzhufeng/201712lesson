const CHANGE_TITLE_TEXT = 'change_title_text';
function createStore(reducer) {
  let state;
  function dispatch(action) {
    state = reducer(state,action); //调用写好的方法，这个方法会返回一个新的状态
  }
  dispatch({});
  let getState = () => JSON.parse(JSON.stringify(state));
  return {getState,dispatch}
}
let initState = {
  titleState:{color:'red',text:'标题'},
  contentState:{color:'green',text:'内容'}
};
let store = createStore(reducer); //创建容器时需要传递一个管理员
function reducer(state=initState,action) { //管理员，负责如何更改状态的
  switch (action.type){
    case CHANGE_TITLE_TEXT:
      return {...state,titleState:{...state.titleState,text:action.text}};
  }
  return state;
}
// 宏 常量
renderApp();
setTimeout(()=>{
  store.dispatch({type:CHANGE_TITLE_TEXT,text:'长标题'});
  renderApp();
},3000);
function renderTitle() {
  let title = document.querySelector('.title');
  title.innerHTML = store.getState().titleState.text;
  title.style.color = store.getState().titleState.color;
}
function renderContent() {
  let content = document.querySelector('.content');
  content.innerHTML = store.getState().contentState.text;
  content.style.color =store.getState().contentState.color;
}
function renderApp() {
  renderTitle();
  renderContent();
}