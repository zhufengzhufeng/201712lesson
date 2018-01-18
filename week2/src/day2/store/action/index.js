import * as Types from '../action-types';
// actionCreator的对象
let actions = {
    addTodo(todo){ // todo是要添加的内容{title,id,isSelected}
      return {type:Types.ADD_TODO,todo}
    },
    changeSelected(id){ //告诉我当前是哪个checkbox更改了
      return {type:Types.CHANGE_SELECTED,id}
    },
    deleteTodo(id){
      return {type:Types.DELETE_TODO,id}
    },
    changeType(val){
      return {type:Types.CHANGE_CURRENT_TYPE,val}
    }
};
export default actions;