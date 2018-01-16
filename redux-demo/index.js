// redux "统一"的状态管理,不能直接更改状态
function createStore() { //将状态放到一个盒子里 别人改不了
  let state = {
    titleState:{color:'red',text:'标题'},
    contentState:{color:'green',text:'内容'}
  };
  function dispatch(action) {// 派发 参数是action动作,规定action是一个对象这个对象必须有一个type属性 {type:'自定义'}
    switch (action.type){ //更改状态 要有一个新的状态覆盖掉
      case CHANGE_TITLE_TEXT:
        state = {...state,titleState:{...state.titleState,text:action.text}};
        break;
      case CHANGE_CONTENT_COLOR:
        state = {...state,contentState:{...state.contentState,color:action.color}};
        break;
    }
  }
  let getState = () => JSON.parse(JSON.stringify(state)); //获取状态的方法
  return {
    getState,dispatch
  }
}
let store = createStore();
// 宏 常量
const CHANGE_TITLE_TEXT = 'change_title_text';
const CHANGE_CONTENT_COLOR = 'change_content_color';
renderApp();
setTimeout(()=>{
  store.dispatch({type:CHANGE_TITLE_TEXT,text:'长标题'}); // 除了type的叫他payload载荷
  store.dispatch({type:CHANGE_CONTENT_COLOR,color:'blue'});
  renderApp(); //每次派发完都需要render
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