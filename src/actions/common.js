import { common_type } from '../reducers/index_type';

export const toggleMenu = () => ({
	type: common_type.TOGGLE_MENU,
});

export const clearMenu = () => ({
  type: common_type.CLEAR_MENU,
});

export const toggleLoading = (bool) => ({
  type: common_type.TOGGLE_LOADING,
  value: bool
});