import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as petListAPI from '../lib/api/petList';

// constants
const CHANGE_FILED = 'petList/CHANGE_FILED';

const [
  SEARCH_PET_LIST,
  SEARCH_PET_LIST_SUCCESS,
  SEARCH_PET_LIST_FAILURE,
] = createRequestActionTypes('petList/SEARCH_PET_LIST');

// actions
export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({
  key,
  value,
}));
export const searchPetList = createAction(
  SEARCH_PET_LIST,
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
const searchPetListSaga = createRequestSaga(
  SEARCH_PET_LIST,
  petListAPI.searchPetList,
);
export function* petListSaga() {
  yield takeLatest(SEARCH_PET_LIST, searchPetListSaga);
}

// reducer
const initialState = {
  form: {
    zones: '',
    petTitles: '',
    petAges: '',
    wantCheckUp: false,
    wantLineAge: false,
    wantNeutered: false,
    credit: 150000,
  },
  items: [
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
};

const petList = handleActions(
  {
    [CHANGE_FILED]: (state, { payload: { key, value } }) => ({
      ...state,
      form: {
        ...state.form,
        [key]: value,
      },
    }),
    [SEARCH_PET_LIST_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      items: response.data.data.content,
    }),
    [SEARCH_PET_LIST_FAILURE]: (state) => ({ ...state }),
  },
  initialState,
);

export default petList;
