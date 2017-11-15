import { menu_type } from '../reducers/index_type';

export const toggleMenu = () => ({
	type: menu_type.TOGGLE_MENU,
});

export const clearMenu = () => ({
  type: menu_type.CLEAR_MENU,
});