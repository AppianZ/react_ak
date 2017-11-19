import { common_type } from '../index_type';

// 定义了一个全局数据
const showMenu = (state = false, action) => {
  switch (action.type) {
    // 根据不用的type来修改state
    case common_type.TOGGLE_MENU:
      if(state && $('#popul')) {
        $('#popul').addClass("ul-start")
          .on('webkitTransitionEnd',function () {
          $('#popul')
            .removeClass('ul-position')
            .removeClass('ul-end')
            .addClass("ul-start")
        });
      } else if (!state && $('#popul')) {
        $('#popul').addClass("ul-position")
          .on('webkitTransitionEnd',function () {
            $('#popul')
              .removeClass('ul-start')
              .removeClass('ul-position')
              .addClass('ul-end');
          });
      }
      return !state;
    case common_type.CLEAR_MENU:
      return false;
    default:
      return state;
  }
};

export default showMenu;