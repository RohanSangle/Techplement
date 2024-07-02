import { combineReducers } from 'redux';

import auth from './auth';
import quote from './quote';

export const reducers = combineReducers({ auth, quote });