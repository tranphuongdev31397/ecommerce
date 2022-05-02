import { createSlice } from '@reduxjs/toolkit';
import { coupon } from 'common/data';
const initialState = {
    couponArr: [],
    error: '',
    paymentInformation: {
        personal: '',
        order: {
            cart: [],
            couponArr: [],
            subTotal: null,
            total: null
        }
    }
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
        },
        actSetPersonalInformation(state, { payload }) {
            console.log(payload);

            state.paymentInformation = {
                ...state.paymentInformation,
                personal: payload
            };
        },
        actSetOrderInformation(state, { payload }) {
            state.paymentInformation.order = payload;
        }
    }
});

export const {
    actAddCoupon,
    actDeleteCoupon,
    actSetPersonalInformation,
    actSetOrderInformation
} = checkOutSlice.actions;

export default checkOutSlice.reducer;
