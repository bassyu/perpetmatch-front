import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListHeader from '../../components/pet/ListHeader';
import {
  changeField,
  changeForm,
  getBoards,
  initBoards,
  searchBoards,
} from '../../modules/pet';
import * as profileAPI from '../../lib/api/profile';
import {
  whiteLocations,
  whitePetAges,
  whitePetTitles,
} from '../../constants/index';

const ListHeaderContainer = () => {
  const dispatch = useDispatch();
  const { searchForm, boardsLength } = useSelector(({ pet }) => ({
    searchForm: pet.searchForm,
    boardsLength: pet.boardsLength,
  }));
  const {
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    expectedFeeForMonth,
  } = searchForm;

  const onChange = (e) => {
    e.persist();
    const { name, value } = e.target;
    dispatch(initBoards());
    dispatch(
      changeField({
        form: 'searchForm',
        key: name,
        value,
      }),
    );
  };
  const onChangeCheckbox = (e) => {
    e.persist();
    const { name, checked } = e.target;
    dispatch(initBoards());
    dispatch(
      changeField({
        form: 'searchForm',
        key: name,
        value: checked,
      }),
    );
  };
  const onChangeSelect = (value) => {
    if (!value.length) {
      return;
    }
    let form = { ...searchForm };
    if (value.filter((i) => whiteLocations.includes(i)).length) {
      form = { ...searchForm, zones: value };
    } else if (value.filter((i) => whitePetTitles.includes(i)).length) {
      form = { ...searchForm, petTitles: value };
    } else if (value.filter((i) => whitePetAges.includes(i)).length) {
      form = { ...searchForm, petAges: value };
    }
    dispatch(changeForm({ form }));
    dispatch(initBoards());
  };

  useEffect(() => {
    async function callAPI() {
      try {
        const response = await profileAPI.getUser();
        const {
          zones,
          petTitles,
          petAges,
          wantCheckUp,
          wantLineAge,
          wantNeutered,
          expectedFeeForMonth,
        } = response.data.data;

        const form = {
          page: 0,
          zones,
          petTitles,
          petAges,
          wantCheckUp,
          wantLineAge,
          wantNeutered,
          expectedFeeForMonth,
        };
        dispatch(initBoards());
        dispatch(changeForm({ form }));
      } catch (e) {
        console.log('프로필 로딩 오류');
      }
    }
    callAPI();
  }, [dispatch]);

  return (
    <ListHeader
      searchForm={searchForm}
      boardsLength={boardsLength}
      onChange={onChange}
      onChangeCheckbox={onChangeCheckbox}
      onChangeSelect={onChangeSelect}
    />
  );
};

export default ListHeaderContainer;
