import {combineReducers} from 'redux';
import coreReducer from './core/core.reducer';
import authReducer from '../modules/Auth/store/auth.reducer';

export default combineReducers({
  core: coreReducer,
  auth: authReducer,
});
