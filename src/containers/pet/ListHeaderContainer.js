import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListHeader from '../../components/pet/ListHeader';
import { changeField, getBoards, searchBoards } from '../../modules/pet';

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
    credit,
  } = searchForm;

  const onChange = (e) => {
    e.persist();
    let { name, value } = e.target;
    if (['wantCheckUp', 'wantLineAge', 'wantNeutered'].includes(name)) {
      value = e.target.checked;
    }
    console.log(name, value, searchForm);
    dispatch(
      changeField({
        form: 'searchForm',
        key: name,
        value: value,
      }),
    );
  };

  useEffect(() => {
    const parse = (value) =>
      value ? JSON.parse(value).map((i) => i.value) : [];

    const form = {
      zones: parse(zones),
      petTitles: parse(petTitles),
      petAges: parse(petAges),
      wantCheckUp,
      wantLineAge,
      wantNeutered,
      credit: parseInt(credit),
    };

    dispatch(
      [
        zones,
        petTitles,
        petAges,
        wantCheckUp,
        wantLineAge,
        wantNeutered,
        credit,
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
    credit,
  ]);

  return (
    <ListHeader searchForm={searchForm} boards={boards} onChange={onChange} />
  );
};

export default ListHeaderContainer;
