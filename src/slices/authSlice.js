import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        actSetCurrentUser(state, { payload }) {
            state.currentUser = payload;
        },
        actLogOut(state, { payload }) {}
    }
});

export const { actSetCurrentUser, actLogOut } = authSlice.actions;

export default authSlice.reducer;
