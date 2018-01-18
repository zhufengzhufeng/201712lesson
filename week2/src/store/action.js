import * as Types from './action-types';
let actions = {
  add(amount){
    // redux-thunk可以返回函数 将函数执行并且将dispatch的权限交给你来处理
      return function (dispatch,getState) { // store.dispatch
        setTimeout(()=>{
          dispatch({type:Types.ADD,amount});
          dispatch({type:Types.ADD,amount});
          dispatch({type:Types.ADD,amount})
        },3000)
      }
  },
  minus(amount){
    // redux-promise可以在actionCreator中返回一个promise对象，他会等待成功后将成功的结果派发出去
    // 默认返回promise的写法是不管失败的，失败了不理你
    // 如果返回一个对象 对象中名字有payload，而且payload是一个promise 它也会让这个promise执行，他会把成功或者失败都进行派发
    return {
      type:Types.MINIS,
      payload:new Promise(function (resolve,reject) {
        setTimeout(()=>{
          if(Math.random()>0.5){
            resolve(1000);
          }else{
            reject(2000);
          }
        },500)
      })
    }

   /* new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject({type:Types.MINIS,amount})
      },1000)
    })*/
  }
};
export default actions;