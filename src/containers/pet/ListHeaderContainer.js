import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListHeader from '../../components/pet/ListHeader';
import {
  changeField,
  changeForm,
  getBoards,
  searchBoards,
} from '../../modules/pet';
import * as profileAPI from '../../lib/api/profile';

const ListHeaderContainer = () => {
  const dispatch = useDispatch();
  const { searchForm, boards } = useSelector(({ pet }) => ({
    searchForm: pet.searchForm,
    boards: pet.boards,
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
    let { name, value } = e.target;
    if (['wantCheckUp', 'wantLineAge', 'wantNeutered'].includes(name)) {
      value = e.target.checked;
    }
    dispatch(
      changeField({
        form: 'searchForm',
        key: name,
        value: value,
      }),
    );
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

        const parse = (value) =>
          value.length ? JSON.stringify(value.map((i) => ({ value: i }))) : '';

        const form = {
          zones: parse(zones),
          petTitles: parse(petTitles),
          petAges: parse(petAges),
          wantCheckUp,
          wantLineAge,
          wantNeutered,
          expectedFeeForMonth: parseInt(expectedFeeForMonth),
        };
        console.log(response, form);
        dispatch(changeForm({ form }));
      } catch (e) {
        console.log('프로필 로딩 오류');
        console.log(e);
      }
    }
    callAPI();
  }, [dispatch]);

  useEffect(() => {
    const parse = (string) =>
      string ? JSON.parse(string).map((i) => i.value) : [];

    const form = {
      zones: parse(zones),
      petTitles: parse(petTitles),
      petAges: parse(petAges),
      wantCheckUp,
      wantLineAge,
      wantNeutered,
      expectedFeeForMonth: parseInt(expectedFeeForMonth),
    };

    dispatch(
      [
        parse(zones).length,
        parse(petTitles).length,
        parse(petAges).length,
        wantCheckUp,
        wantLineAge,
        wantNeutered,
        expectedFeeForMonth,
      ]
        .map((i) => Boolean(i))
        .includes(true)
        ? searchBoards(form)
        : getBoards(),
    );
  }, [
    dispatch,
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    expectedFeeForMonth,
  ]);

  return (
    <ListHeader searchForm={searchForm} boards={boards} onChange={onChange} />
  );
};

export default ListHeaderContainer;
