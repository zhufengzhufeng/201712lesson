import {createStore} from '../redux';
function reducer(state={number:0},action) {
  switch (action.type){
    case 'ADD':
      return {number:state.number+action.count};
    case 'MINUS':
      return {number:state.number-action.count};
  }
  return state;
}
export default createStore(reducer);