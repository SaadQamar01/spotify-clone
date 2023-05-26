import {
  APP_INITIALIZED,
  CALL_IN_PROCESS,
  CALL_IN_PROCESS1,
  CALL_IN_PROCESS2,
  COUNTRIES_SUCCESS,
  STATE_SUCCESS,
  CITY_SUCCESS,
} from './core.actions';

const INITIAL_STATE = {
  initialLoading: true,
  callInProcess: false,
  callInProcess1: false,
  callInProcess2: false,
  countries: [],
  states: [],
  cities: [],
};

const coreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APP_INITIALIZED:
      return {
        ...state,
        initialLoading: action.payload.initialized,
      };
    case CALL_IN_PROCESS:
      return {
        ...state,
        callInProcess: action.payload,
      };
    case CALL_IN_PROCESS1:
      return {
        ...state,
        callInProcess1: action.payload,
      };
    case CALL_IN_PROCESS2:
      return {
        ...state,
        callInProcess2: action.payload,
      };
    case COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default coreReducer;
