import { connect } from 'react-redux';
import { clearMenu, toggleLoading, toggleMarkdown } from '../../actions/common';
import App from '../../components/App';

const mapStateToProps = state => {
  return {
    status: state.showMenu,
    loading: state.showLoading,
    isMd: state.isMarkdown,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShowMenuFalse: () => {
      dispatch(clearMenu());
    },
    toggleLoading: (bool) => {
      dispatch(toggleLoading(bool));
    },
    toggleMarkdown: (bool) => {
      dispatch(toggleMarkdown(bool));
    },
  }
}

const Body = connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  { pure : false },
)(App);

export default Body;
