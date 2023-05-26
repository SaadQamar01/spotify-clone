import { combineEpics } from 'redux-most';
import toastEpics from './toast/toast.epics';
import authEpics from '../modules/Auth/store/auth.epics';
import coreEpics from './core/core.epics';

const rootEpic = combineEpics([toastEpics, authEpics, coreEpics]);

export default rootEpic;
