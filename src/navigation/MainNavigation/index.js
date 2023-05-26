import MainNavigator from './MainNavigator';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const mapStateToProps = state => {
  const {auth, core} = state;
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);
