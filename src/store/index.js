import { configureStore } from '@reduxjs/toolkit';
import categorySlice from 'components/Header/modules/categorySlice';
import cartSlice from 'slices/cartSlice';

const rootReducer = {
    categoriesReducer: categorySlice,
    cartReducer: cartSlice
};

const store = configureStore({
    reducer: rootReducer
});

export default store;
