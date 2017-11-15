import { connect } from 'react-redux';
import App from '../../components/App';

const mapStateToProps = state => {
  return {
    status: state.showMenu,
  }
}

const Body = connect(
  mapStateToProps,
  () => ({}),
  undefined,
  { pure : false },
)(App);

export default Body;
