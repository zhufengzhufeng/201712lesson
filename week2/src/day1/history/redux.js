function createStore(r) {
  let state;
  function dispatch(action) {
    state = r(state,action);
    listeners.forEach(item=>item());
  }
  let listeners = [];
  let subscribe = (fn)=>{
    listeners.push(fn);
    return ()=>{
      listeners = listeners.filter(item=>item!==fn);
    }
  };
  dispatch({});
  let getState = () => JSON.parse(JSON.stringify(state));
  return {getState,dispatch,subscribe}
}
export {createStore}