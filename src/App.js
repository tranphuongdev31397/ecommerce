import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'App.scss';
import ClientLayout from 'layouts/Client';
import Home from 'pages/Home';
import Shopping from 'pages/Shopping';
import ProductDetail from 'pages/ProductDetail';

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
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
