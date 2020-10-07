import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListHeader from '../../components/pet/ListHeader';
import { changeField, searchPetList } from '../../modules/petList';

const ListHeaderContainer = () => {
  const dispatch = useDispatch();
  const { form, items } = useSelector(({ petList }) => ({
    form: petList.form,
    items: petList.items,
  }));
  const {
    zones,
    petTitles,
    petAges,
    wantCheckUp,
    wantLineAge,
    wantNeutered,
    credit,
  } = form;

  const onChange = (e) => {
    e.persist();
    let { name, value } = e.target;

    console.log(name, value, form);
    dispatch(
      changeField({
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

  return <ListHeader form={form} items={items} onChange={onChange} />;
};

export default ListHeaderContainer;
