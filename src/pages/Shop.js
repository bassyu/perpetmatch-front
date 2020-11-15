import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import ShopBoard from './ShopBoard';
import ShopCart from './ShopCart';
import ShopCheckout from './ShopCheckout';
import ShopList from './ShopList';
import Signin from './Signin';

function Shop() {
  return (
    <>
      <Switch>
        <Route path="/shop/list/:category" component={ShopList} />
        <Route path="/shop/board/:id" component={ShopBoard} />
        <PrivateRoute
          path="/shop/cart"
          component={ShopCart}
          redirectTo={Signin}
        />
        <PrivateRoute
          path="/shop/checkout"
          component={ShopCheckout}
          redirectTo={Signin}
        />
      </Switch>
    </>
  );
}

export default Shop;
