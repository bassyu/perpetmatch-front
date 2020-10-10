import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import pet, { petSaga } from './pet';

const rootReducer = combineReducers({
  auth,
  loading,
  pet,
});

export function* rootSaga() {
  yield all([authSaga(), petSaga()]);
}

export default rootReducer;
