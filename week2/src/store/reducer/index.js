import counter from './counter';
import todo from './todo';
import {combineReducers} from 'redux';
// 会产生一个新的reducer

let reducers = combineReducers({
  counter,todo
}); // {counter:{num:0},todo:[]}

export default reducers;

