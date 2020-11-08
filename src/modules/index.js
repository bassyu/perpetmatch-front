import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import pet, { petSaga } from './pet';
import profile, { profileSaga } from './profile';

const rootReducer = combineReducers({
  auth,
  loading,
  pet,
  profile,
});

export function* rootSaga() {
  yield all([authSaga(), petSaga(), profileSaga()]);
}

export default rootReducer;
