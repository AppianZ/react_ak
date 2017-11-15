import { connect } from 'react-redux';
import { clearMenu } from '../../actions/menu';
import App from '../../components/App';

const mapStateToProps = state => {
  return {
    status: state.showMenu,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setShowMenuFalse: () => {
      dispatch(clearMenu());
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
