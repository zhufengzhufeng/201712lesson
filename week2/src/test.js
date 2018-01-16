let createStore = require('./redux');
function reducer(state={number:0},action) {
  switch (action.type){
    case 'ADD':
      return {number:state.number+action.b}
  }
  return state;
}
let store = createStore(reducer);
let un = store.subscribe(function () {
  console.log(store.getState())
});
store.dispatch({type:'ADD',b:1});
un();
store.dispatch({type:'ADD',b:1});
store.dispatch({type:'ADD',b:1});
