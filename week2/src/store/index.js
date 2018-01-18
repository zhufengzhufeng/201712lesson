import {createStore,applyMiddleware, compose} from 'redux';
// applyMiddleware是redux中的方法 可以帮我们应用中间件
import reducer from './reducer';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk'; //可以让我们的actionCreator返回函数，而且函数的第一个参数是dispatch，第二个参数是getState
import reduxPromise from 'redux-promise';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(
  applyMiddleware(reduxLogger,reduxThunk,reduxPromise)
));
window._store = store;
export default store;