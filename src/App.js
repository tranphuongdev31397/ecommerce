import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'App.scss';
import ClientLayout from 'layouts/Client';
import Home from 'pages/Home';
import Shopping from 'pages/Shopping';
import ProductDetail from 'pages/ProductDetail';
import CheckOut from 'pages/CheckOut';
import LoginPage from 'pages/LogIn';
import RegisterPage from 'pages/Register';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'config/firebase/firebase';
import { useEffect, useState } from 'react';
import UsersServices from 'services/UsersServices';
import { useDispatch, useSelector } from 'react-redux';
import { actSetCurrentUser } from 'slices/authSlice';
import { actSetCartUser } from 'slices/cartSlice';
import PaymentPage from 'pages/Payment';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ClientLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="/shopping" element={<Shopping />} />
                    <Route
                        path="/product-detail/:productId"
                        element={<ProductDetail />}
                    />
                    <Route path="/checkout" element={<CheckOut />} />
                    <Route path="/payment" element={<PaymentPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
