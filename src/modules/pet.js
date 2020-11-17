import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as petAPI from '../lib/api/pet';

// constants
const CHANGE_FILED = 'pet/CHANGE_FILED';
const CHANGE_FORM = 'pet/CHANGE_FORM';
const INIT_BOARDS = 'pet/INIT_BOARDS';
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
export const changeForm = createAction(CHANGE_FORM, ({ form }) => ({ form }));
export const initBoards = createAction(INIT_BOARDS, () => {});
export const searchBoards = createAction(
  SEARCH_BOARDS,
  ({
    page,
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    expectedFeeForMonth,
  }) => ({
    page,
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    expectedFeeForMonth,
  }),
);

// middleware
const searchBoardsSaga = createRequestSaga(SEARCH_BOARDS, petAPI.searchBoards);

export function* petSaga() {
  yield takeLatest(SEARCH_BOARDS, searchBoardsSaga);
}

// reducer
const initialState = {
  searchForm: {
    page: 0,
    done: false,
    zones: [],
    petTitles: [],
    petAges: [],
    wantCheckUp: false,
    wantLineAge: false,
    wantNeutered: false,
    expectedFeeForMonth: 150000,
  },
  boards: [],
  boardsLength: 0,

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
    [CHANGE_FORM]: (state, { payload: { form } }) => ({
      ...state,
      searchForm: form,
    }),
    [INIT_BOARDS]: (state) => ({
      ...state,
      searchForm: {
        ...state.searchForm,
        page: 0,
        done: false,
      },
      boards: [],
    }),
    [SEARCH_BOARDS_SUCCESS]: (state, { payload: response }) => ({
      ...state,
      searchForm: {
        ...state.searchForm,
        page: state.searchForm.page + 1,
        done: response.data.data.last,
      },
      boards: state.boards.concat(response.data.data.content),
      boardsLength: response.data.data.totalElements,
    }),
    [SEARCH_BOARDS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      petError: error,
    }),
  },
  initialState,
);

export default pet;
