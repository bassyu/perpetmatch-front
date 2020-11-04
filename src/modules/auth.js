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
const TEMP_SET_AUTH = 'auth/TEMP_SET_AUTH';
const SIGNOUT = 'auth/SIGNOUT';

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
export const tempSetAuth = createAction(TEMP_SET_AUTH, (auth) => auth);
export const signout = createAction(SIGNOUT);

export const signin = createAction(SIGNIN, ({ usernameOrEmail, password }) => ({
  usernameOrEmail,
  password,
}));
export const signup = createAction(SIGNUP, ({ nickname, email, password }) => ({
  nickname,
  email,
  password,
}));

// middleware
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
  signupResult: {
    success: null,
    message: '',
  },
  signin: {
    usernameOrEmail: '',
    password: '',
  },
  auth: {
    accessToken: '',
    tokenType: '',
  },
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
    [TEMP_SET_AUTH]: (state, { payload: auth }) => ({
      ...state,
      auth: auth,
    }),
    [SIGNOUT]: (state) => ({
      ...state,
      auth: initialState.auth,
    }),
    [SIGNIN_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      authError: null,
      auth: response.data,
    }),
    [SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNUP_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      signupResult: {
        success: true,
        failure: false,
        message: response.data.message,
      },
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      signupResult: {
        success: false,
        failure: true,
        message: error.response.data.message,
      },
    }),
  },
  initialState,
);

export default auth;
