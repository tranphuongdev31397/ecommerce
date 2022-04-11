import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'App.scss';
import ClientLayout from 'layouts/Client';
import Home from 'pages/Home';
import Shopping from 'pages/Shopping';
import ProductDetail from 'pages/ProductDetail';
import CheckOut from 'pages/CheckOut';

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
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
