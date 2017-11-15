import { menu_type } from '../index_type';

// 定义了一个全局数据
const showMenu = (state = false, action) => {
  switch (action.type) {
    // 根据不用的type来修改state
    case menu_type.TOGGLE_MENU:
      return !state;
    case menu_type.CLEAR_MENU:
      return false;
    default:
      return state;
  }
};

export default showMenu;