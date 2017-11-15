import { connect } from 'react-redux';
import { toggleMenu } from '../../actions/menu';
import App from '../../components/App';

const mapStateToProps = state => {
  console.log('state:' + state);
  return {
    status: state.showMenu,
  }
}

const Body = connect(
  mapStateToProps,
  () => ({}), // 顶替mapDispatchToProps
)(App);

export default Body;
