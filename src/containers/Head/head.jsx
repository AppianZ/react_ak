import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/common';
import Header from '../../components/Header';

const mapDispatchToProps = dispatch => {
  return {
    onMenuBtnClick: () => {
      //必须和components中的参数名称一致
      dispatch(toggleMenu());
    },
  }
}

const Head = connect(
  () => ({}), // 顶替mapStateToProps
  mapDispatchToProps,
)(Header);

export default Head;
