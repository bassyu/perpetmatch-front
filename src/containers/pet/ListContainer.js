import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../components/pet/List';
import throttle from '../../lib/throttle';
import { changeField } from '../../modules/pet';
import { initBoards, searchBoards } from '../../modules/pet';

const ListContainer = () => {
  const dispatch = useDispatch();
  const { searchForm, boards } = useSelector(({ pet }) => ({
    boards: pet.boards,
    searchForm: pet.searchForm,
  }));

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(initBoards());
    return () => {
      console.log('init page');
      dispatch(
        changeField({
          form: 'searchForm',
          key: 'page',
          value: 0,
        }),
      );
    };
  }, [dispatch]);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 400
      ) {
        dispatch(searchBoards(searchForm));
      }
    };
    const onScrollThrottle = throttle(onScroll, 100);

    window.addEventListener('scroll', onScrollThrottle);
    return () => {
      window.removeEventListener('scroll', onScrollThrottle);
    };
  }, [dispatch, searchForm]);

  return <List boards={boards} />;
};

export default ListContainer;
