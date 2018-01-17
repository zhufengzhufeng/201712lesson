import {createStore} from 'redux';
import reducer from './reducer';
let store = createStore(reducer);
window._store = store;
// 为了在控制台里可以打印store中的内容
export default store