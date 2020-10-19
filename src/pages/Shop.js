import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopBoard from './ShopBoard';
import ShopCart from './ShopCart';
import ShopList from './ShopList';

const Shop = () => {
  return (
    <>
      <Switch>
        <Route path="/shop/list/:category" component={ShopList} />
        <Route path="/shop/board/:id" component={ShopBoard} />
        <Route path="/shop/cart/" component={ShopCart} />
      </Switch>
    </>
  );
};

export default Shop;
