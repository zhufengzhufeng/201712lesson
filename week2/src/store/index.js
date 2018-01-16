import {createStore,combineReducers} from '../redux';
function counter(state={number:0},action) {
  switch (action.type){
    case 'ADD':
      return {number:state.number+action.count};
    case 'MINUS':
      return {number:state.number-action.count};
  }
  return state;
}
function todo(state=[],action) {
  switch (action.type){
    case 'ADDTODO':
      return [...state,action.content]
  }
  return state;
}
// 返回一个新的reducer,combineReducers是redux中的
// combineReducers {counter:{number:0},todo:[]}
let reducer = combineReducers({
  counter,todo
});
export default createStore(reducer);



