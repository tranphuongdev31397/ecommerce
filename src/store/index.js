import { configureStore } from '@reduxjs/toolkit';
import categorySlice from 'components/Header/modules/categorySlice';

const rootReducer = {
    categoriesReducer: categorySlice
};

const store = configureStore({
    reducer: rootReducer
});

export default store;
