import { configureStore } from '@reduxjs/toolkit';
import categorySlice from 'components/Header/modules/categorySlice';
import checkOutSlice from 'pages/CheckOut/checkOutSlice';
import registerSlice from 'pages/Register/registerSlice';
import cartSlice from 'slices/cartSlice';

const rootReducer = {
    categoriesReducer: categorySlice,
    cartReducer: cartSlice,
    checkOutReducer: checkOutSlice,
    registerReducer: registerSlice
};

const store = configureStore({
    reducer: rootReducer
});

export default store;
