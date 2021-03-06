import React, { useState } from 'react'
import { Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import ProductList from './components/products/ProductList';
import ProductDetails from './components/products/ProductDetails';
import OrderList from './components/orders/OrderList';
import Account from './components/account/Account';
import ProductForm from './components/products/ProductForm';
import Register from './components/auth/Register';
import Home from './components/Home/Home';
import ProductTypes from './components/products/ProductTypes';
import ProductSearch from './components/products/ProductSearch';
import PaymentTypeList from './components/payment_types/PaymentTypeList';
import OrderHistoryList from './components/account/OrderHistoryList';
import CompletedOrder from './components/orders/CompletedOrder';
import OrderDetails from './components/orders/OrderDetails';

export default function ApplicationViews(props) {

    const setCurrentUser = props.setCurrentUser

    return (
        <>
            <Route
                exact path="/" render={props => {
                    return <Home setIsCurrentUser={setCurrentUser} {...props} />
                }}
            />
            <Route
                exact
                path='/register'
                render={props => {
                    return <Register setIsCurrentUser={setCurrentUser} {...props} />
                }}
            />
            <Route
                exact
                path="/login"
                render={props => {
                    return <Login setIsCurrentUser={setCurrentUser} {...props} />
                }}
            />
            <Route
                exact path="/products" render={props => {
                    return <ProductList {...props} />
                }}
            />

            <Route
                exact path="/products/:productId" render={props => {
                    return <ProductDetails productId={parseInt(props.match.params.productId)} {...props} />
                }}
            />

            <Route
                path="/productTypes" render={props => {
                    return <ProductTypes {...props} />
                }}
            />

            <Route
                path="/sell" render={props => {
                    return <ProductForm {...props} />
                }}
            />

            <Route
                path="/account" render={props => {
                    return <Account {...props} />
                }}
            />

            <Route
                path="/paymentTypes" render={props => {
                    return <PaymentTypeList {...props} />
                }}
            />

            <Route
                path="/orderHistory" render={props => {
                    return <OrderHistoryList {...props} />
                }}
            />

            <Route
                path="/cart" render={props => {
                    return <OrderList {...props} />
                }}
            />

            <Route path="/search"> 
            <div className="d-flex flex-wrap home-flex" style={{ "padding" : "20px", "align-items" : "center" }}>
                {props.products.map (product => <ProductSearch key={product.id} product={product} {...props} />)}
                </div>
            </Route>   

            <Route
                exact path="/confirmation" render={props => {
                    return <CompletedOrder {...props} />
                }}
            /> 

            <Route
                exact path="/order/:orderId" render={props => {
                    return <OrderDetails orderId={parseInt(props.match.params.orderId)} {...props} />
                }}
            />
        </>
    )
}
