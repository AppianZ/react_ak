import { combineReducers } from 'redux';
import showMenu from './common/menu';
import showLoading from './common/loading';

// 把所有reducers集合起来,成为一个store
export default combineReducers({
  showMenu,
  showLoading,
});