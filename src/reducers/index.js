import { combineReducers } from 'redux';
import showMenu from './menu/menu';

// 把所有reducers集合起来,成为一个store
export default combineReducers({
  showMenu,
});