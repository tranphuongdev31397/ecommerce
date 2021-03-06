import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    loading: true
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        fetchCategories(state, action) {
            state.categories = action.payload;
            state.loading = false;
        }
    }
});

export const { fetchCategories } = categorySlice.actions;

export default categorySlice.reducer;
