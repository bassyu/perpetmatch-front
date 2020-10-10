import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListHeader from '../../components/pet/ListHeader';
import { changeField, searchPetList } from '../../modules/pet';

const ListHeaderContainer = () => {
  const dispatch = useDispatch();
  const { searchForm, items } = useSelector(({ pet }) => ({
    searchForm: pet.searchForm,
    items: pet.items,
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

    dispatch(
      searchPetList({
        zones: parse(zones),
        petTitles: parse(petTitles),
        petAges: parse(petAges),
        wantCheckUp,
        wantLineAge,
        wantNeutered,
        credit: parseInt(credit),
      }),
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
    <ListHeader searchForm={searchForm} items={items} onChange={onChange} />
  );
};

export default ListHeaderContainer;
