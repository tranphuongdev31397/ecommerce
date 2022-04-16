import { createSlice } from '@reduxjs/toolkit';
import { coupon } from 'common/data';
const initialState = {
    couponArr: [],
    error: ''
};

const checkOutSlice = createSlice({
    name: 'checkOut',
    initialState,
    reducers: {
        actAddCoupon(state, { payload }) {
            if (!payload) {
                return;
            } else {
                if (
                    coupon.some(
                        (item) =>
                            item.couponCode.toLowerCase() ===
                            payload.toLowerCase()
                    )
                ) {
                    let couponItem = coupon.find(
                        (item) =>
                            item.couponCode.toLowerCase() ===
                            payload.toLowerCase()
                    );
                    if (
                        state.couponArr.some(
                            (item) => item.couponType === couponItem.couponType
                        )
                    ) {
                        state.error = 'You added this coupon type';
                    } else {
                        state.couponArr.push(couponItem);
                        state.error = null;
                    }
                } else {
                    state.error = 'Coupon incorrect';
                }
            }
        },
        actDeleteCoupon(state, { payload }) {
            state.couponArr = state.couponArr.filter(
                (item) => item.id !== payload
            );
        }
    }
});

export const { actAddCoupon, actDeleteCoupon } = checkOutSlice.actions;

export default checkOutSlice.reducer;
