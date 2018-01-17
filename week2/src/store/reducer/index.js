import * as Types from '../action-types'
let initState = {
    type:'all', //默认全部显示
    todos:[
      {isSelected:false,title:'今天吃药了嘛?',id:1},
      {isSelected:true,title:'今天吃药了嘛?',id:2}
    ]
};
function reducer(state=initState,action) {
  switch (action.type){
    case Types.ADD_TODO:
      return {...state,todos:[...state.todos,action.todo]};
    case Types.CHANGE_SELECTED:
      let todos = state.todos.map(item=>{
        if(item.id === action.id){ //找到id和当前选择id相等一项的
          item.isSelected = !item.isSelected; //将状态取反
        }
        return item;
      });
      return {...state,todos};
    case Types.DELETE_TODO:{
      let todos = state.todos.filter(item=>item.id!==action.id);
      return {...state,todos}
    }
    case Types.CHANGE_CURRENT_TYPE:
      return {...state,type:action.val}
  }
  return state;
}
export default reducer;

