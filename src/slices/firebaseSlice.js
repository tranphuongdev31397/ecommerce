import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    errorMessage: null
};

const firebaseSlice = createSlice({
    name: 'firebase',
    initialState,
    reducers: {
        actSetErrorMess(state, { payload }) {
            state.errorMessage = payload;
        }
    }
});

export const { actSetErrorMess } = firebaseSlice.actions;

export default firebaseSlice.reducer;
