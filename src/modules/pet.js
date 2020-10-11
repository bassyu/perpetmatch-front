import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as petAPI from '../lib/api/pet';

// constants
const CHANGE_FILED = 'pet/CHANGE_FILED';
const [
  GET_BOARDS,
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILURE,
] = createRequestActionTypes('pet/GET_BOARDS');
const [
  SEARCH_BOARDS,
  SEARCH_BOARDS_SUCCESS,
  SEARCH_BOARDS_FAILURE,
] = createRequestActionTypes('pet/SEARCH_BOARDS');

// actions
export const changeField = createAction(
  CHANGE_FILED,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
export const getBoards = createAction(GET_BOARDS, () => {});
export const searchBoards = createAction(
  SEARCH_BOARDS,
  ({
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    credit,
  }) => ({
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    credit,
  }),
);

// middleware
const getBoardsSaga = createRequestSaga(GET_BOARDS, petAPI.getBoards);
const searchBoardsSaga = createRequestSaga(SEARCH_BOARDS, petAPI.searchBoards);

export function* petSaga() {
  yield takeLatest(GET_BOARDS, getBoardsSaga);
  yield takeLatest(SEARCH_BOARDS, searchBoardsSaga);
}

// reducer
const initialState = {
  searchForm: {
    zones: '',
    petTitles: '',
    petAges: '',
    wantCheckUp: false,
    wantLineAge: false,
    wantNeutered: false,
    credi: 150000,
  },
  boards: [
    {
      id: 286,
      title: '버려진 포메 보호하고 있습니다',
      credit: 150000,
      year: 1,
      month: 11,
      tags: [
        '서울특별시',
        '치와와',
        '1년~7년',
        '건강검진증',
        '혈통서',
        '중성화',
      ],
      boardImage1: '/images/sub/img_adopt1.png',
      createdAt: '2020-09-25',
    },
  ],
  petError: null,
};

const pet = handleActions(
  {
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) => ({
      ...state,
      [form]: {
        ...state[form],
        [key]: value,
      },
    }),
    [GET_BOARDS_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      boards: response.data.data.content,
    }),
    [GET_BOARDS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      petError: error,
    }),
    [SEARCH_BOARDS_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      boards: response.data.data.content,
    }),
    [SEARCH_BOARDS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      petError: error,
    }),
  },
  initialState,
);

export default pet;
