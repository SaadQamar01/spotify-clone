import { combineEpics, select } from 'redux-most';
import * as most from 'most';
import {
  COUNTRIES,
  countriesSuccess, callInProcess,
} from './core.actions';
import {
  countriesList,
} from '../../core/services/core/core.services';

const countriesEpic = ($actions, store) =>
  $actions.thru(select(COUNTRIES)).flatMap(action => {
    return most
      .fromPromise(countriesList())
      .flatMap(response => {
        return most.from([
          countriesSuccess({
            countries: response,
          }),
          callInProcess(false),
        ]);
      })
      .recoverWith(err => {
        return most.of(callInProcess(false));
      });
  });

export default combineEpics([countriesEpic]);
