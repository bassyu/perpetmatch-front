import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as profileAPI from '../lib/api/profile';

// constants
const INIT_USER = 'profile/INIT_USER';
const [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes(
  'profile/GET_USER',
);

// actions
export const initUser = createAction(INIT_USER, () => {});
export const getUser = createAction(GET_USER, () => {});

// middleware
const getUserSaga = createRequestSaga(GET_USER, profileAPI.getUser);
export function* profileSaga() {
  yield takeLatest(GET_USER, getUserSaga);
}

// reducer
const initialState = {
  user: {
    age: 0,
    occupation: '',
    location: '',
    houseType: 'apartment',
    experience: false,
    liveAlone: false,
    hasPet: false,
    phoneNumber: '',
    description: '',
    wantCheckUp: false,
    wantLineAge: false,
    wantNeutered: false,
    zones: [],
    petTitles: [],
    petAges: [],
  },
};

const profile = handleActions(
  {
    [INIT_USER]: (state) => ({
      ...state,
      user: initialState.user,
    }),
    [GET_USER_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      user: response.data.data,
    }),
    [GET_USER_FAILURE]: (state) => ({
      ...state,
    }),
  },
  initialState,
);

export default profile;
