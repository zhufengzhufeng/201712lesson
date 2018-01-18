import * as Types from './action-types';
export default function (state={number:0},action) {
  switch (action.type){
    case Types.ADD:
      return {number:state.number+action.amount}
    case Types.MINIS:
      return {number:state.number-action.payload}
  }
  return state;
}