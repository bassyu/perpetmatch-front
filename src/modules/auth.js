import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

// constants
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] = createRequestActionTypes(
  'auth/SIGNIN',
);

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes(
  'auth/SIGNUP',
);

// actions
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const signin = createAction(SIGNIN, ({ usernameOrEmail, password }) => ({
  usernameOrEmail,
  password,
}));
export const signup = createAction(SIGNUP, ({ nickname, email, password }) => ({
  nickname,
  email,
  password,
}));

// saga
const signinSaga = createRequestSaga(SIGNIN, authAPI.signin);
const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);
export function* authSaga() {
  yield takeLatest(SIGNIN, signinSaga);
  yield takeLatest(SIGNUP, signupSaga);
}

// reducer
const initialState = {
  signup: {
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  },
  signin: {
    usernameOrEmail: '',
    password: '',
  },
  auth: null,
  authError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // ex) state.signup.nickname = value
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [SIGNIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState,
);

export default auth;
