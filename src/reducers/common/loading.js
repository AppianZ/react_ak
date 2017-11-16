import { common_type } from '../index_type';

// 定义了一个全局数据
const showLoading = (state = false, action) => {
  switch (action.type) {
    // 根据不用的type来修改state
    case common_type.TOGGLE_LOADING:
      return action.value;
    default:
      return state;
  }
};

export default showLoading;