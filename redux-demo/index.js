// redux "统一"的状态管理,不能直接更改状态
let state = {
  titleState:{color:'red',text:'标题'},
  contentState:{color:'green',text:'内容'}
};
// 宏 常量
const CHANGE_TITLE_TEXT = 'change_title_text';
const CHANGE_CONTENT_COLOR = 'change_content_color';
function dispatch(action) {// 派发 参数是action动作,规定action是一个对象这个对象必须有一个type属性 {type:'自定义'}
  switch (action.type){ //更改状态 要有一个新的状态覆盖掉
    case CHANGE_TITLE_TEXT:
      break;
    case CHANGE_CONTENT_COLOR:
      break;
  }
}
renderApp();
setTimeout(()=>{
  dispatch({type:CHANGE_TITLE_TEXT,text:'长标题'}); // 除了type的叫他payload载荷
  dispatch({type:CHANGE_CONTENT_COLOR,color:'blue'});
},3000);


function renderTitle() {
  let title = document.querySelector('.title');
  title.innerHTML = state.titleState.text;
  title.style.color = state.titleState.color;
}
function renderContent() {
  let content = document.querySelector('.content');
  content.innerHTML = state.contentState.text;
  content.style.color =state.contentState.color;
}
function renderApp() {
  renderTitle();
  renderContent();
}