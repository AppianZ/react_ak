import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/menu';
import NavToggle from '../../components/NavToggle';

const mapDispatchToProps = dispatch => {
  return {
    onMenuClick: () => {
      //必须和components中的参数名称一致
      dispatch(toggleMenu())
    }
  }
}

const Menu = connect(
  () => ({}), // 顶替mapStateToProps
  mapDispatchToProps
)(NavToggle);

export default Menu;
