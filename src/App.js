import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'App.scss';
import ClientLayout from 'layouts/Client';
import Home from 'pages/Home';
import Shopping from 'pages/Shopping';
import ProductDetail from 'pages/ProductDetail';
import CheckOut from 'pages/CheckOut';
import LoginPage from 'pages/LogIn';
import RegisterPage from 'pages/Register';
import PaymentPage from 'pages/Payment';
import MyAccount from 'pages/MyAccount';
import PageNotFound from 'components/PageNotFound';
import { useEffect, useState } from 'react';
import NotSupport from 'components/BreakPoint/NotSupport';

function App() {
    const [windowWidth, setWindowWidth] = useState(0);

    const updateDimensions = () => {
        //Get breakpoint init
        const width = window.innerWidth;

        setWindowWidth(width);
    };
    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [windowWidth]);

    return windowWidth <= 768 ? (
        <NotSupport />
    ) : (
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
                    <Route path="/my-account" element={<MyAccount />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
