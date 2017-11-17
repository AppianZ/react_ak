import { common_type } from '../index_type';

// 定义了一个全局数据
const isMarkdown = (state = false, action) => {
  switch (action.type) {
    // 根据不用的type来修改state
    case common_type.TOGGLE_MARKDOWN:
      return action.value;
    default:
      return state;
  }
};

export default isMarkdown;