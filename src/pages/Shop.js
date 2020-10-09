import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopList from './ShopList';

const Shop = () => {
  return (
    <>
      <Switch>
        <Route path="/shop/list" component={ShopList} />
      </Switch>
    </>
  );
};

export default Shop;
