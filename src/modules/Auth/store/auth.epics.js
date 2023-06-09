import { combineEpics, select } from 'redux-most';
import * as most from 'most';
import {
  LOGIN,
  loginSuccess,
} from './auth.actions';
import {
  callInProcess,
} from '../../../store/core/core.actions';
import { showToast } from '../../../store/toast/toast.actions';
import { login } from '../../../core/services/auth/auth.services';
import AuthenticationTokenHelper from '../../../core/helper/AuthenticationTokenHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate, resetStack } from '../../../navigation/RootNavigation';

const storeAuthInAsyncStorage = ({ token, user }) => {
  try {
    if (token) {
      AsyncStorage.setItem('token', token);
    }
    if (user) {
      AsyncStorage.setItem('user', JSON.stringify(user));
    }
  } catch (error) {
    console.log(error);
  }
};



const loginEpic = ($actions, store) =>
  $actions.thru(select(LOGIN)).flatMap(action => {
    return most
      .fromPromise(login(action.payload))
      .flatMap(response => {
        const { token } = response;
        AuthenticationTokenHelper.authToken = token;
        resetStack({
          index: 0,
          routes: [{ name: 'TabNavigator' }],
        });
        storeAuthInAsyncStorage({ token });
        return most.from([
          loginSuccess({
            token,
          }),
          callInProcess(false),
          showToast({
            message: 'Login Successfully',
            type: 'success',
          }),
        ]);
      })
      .recoverWith(err => {
        return most.of(callInProcess(false));
      });
  });


export default combineEpics([
  loginEpic,
]);
