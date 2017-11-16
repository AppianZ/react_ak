import { connect } from 'react-redux';
import { clearMenu, toggleLoading } from '../../actions/common';
import App from '../../components/App';

const mapStateToProps = state => {
  return {
    status: state.showMenu,
    loading: state.showLoading,
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
  }
}

const Body = connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  { pure : false },
)(App);

export default Body;
