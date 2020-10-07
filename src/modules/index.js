import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import petList, { petListSaga } from './petList';

const rootReducer = combineReducers({
  auth,
  loading,
  petList,
});

export function* rootSaga() {
  yield all([authSaga(), petListSaga()]);
}

export default rootReducer;
