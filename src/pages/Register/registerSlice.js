import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    registerValues: {}
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        actSetRegisterValues(state, { payload }) {
            const { values, isReset } = payload;
            if (isReset) {
                state.registerValues = {};
            } else {
                state.registerValues = { ...state.registerValues, ...values };
            }
        }
    }
});

export const { actSetRegisterValues } = registerSlice.actions;

export default registerSlice.reducer;
