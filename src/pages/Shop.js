import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopBoard from './ShopBoard';
import ShopList from './ShopList';

const Shop = () => {
  return (
    <>
      <Switch>
        <Route path="/shop/list" component={ShopList} />
        <Route path="/shop/board/:id" component={ShopBoard} />
      </Switch>
    </>
  );
};

export default Shop;
