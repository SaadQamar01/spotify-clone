export const APP_INITIALIZED = 'APP_INITIALIZED';
export const CALL_IN_PROCESS = 'CALL_IN_PROCESS';
export const CALL_IN_PROCESS1 = 'CALL_IN_PROCESS1';
export const CALL_IN_PROCESS2 = 'CALL_IN_PROCESS2';
export const COUNTRIES = 'COUNTRIES';
export const COUNTRIES_SUCCESS = 'COUNTRIES_SUCCESS';
export const COUNTRIES_FAILURE = 'COUNTRIES_FAILURE';

export const RESET_REDUCERS = 'RESET_REDUCERS';

export const appInitialized = ({ initialized }) => {
  return {
    type: APP_INITIALIZED,
    payload: {
      initialized,
    },
  };
};

export const callInProcess = toggle => ({
  type: CALL_IN_PROCESS,
  payload: toggle,
});

export const callInProcess1 = toggle => ({
  type: CALL_IN_PROCESS1,
  payload: toggle,
});

export const callInProcess2 = toggle => ({
  type: CALL_IN_PROCESS2,
  payload: toggle,
});

export const countries = () => ({
  type: COUNTRIES,
});
