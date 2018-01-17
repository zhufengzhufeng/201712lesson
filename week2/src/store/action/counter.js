import * as Types from '../action-types';
//ActionCreator 就是一个普通函数 返回一个action对象
function add(count) {
  return {type:Types.INCREMENT,count}
}
function minus(count) {
  return {type:Types.DECREMENT,count}
}
export {add,minus}