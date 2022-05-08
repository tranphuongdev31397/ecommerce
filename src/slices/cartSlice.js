import { createSlice } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import UsersServices from 'services/UsersServices';

const initialState = {
    cart: [
        // {
        //     id: 1,
        //     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        //     price: 109.95,
        //     description:
        //         'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        //     category: "men's clothing",
        //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        //     rating: {
        //         rate: 3.9,
        //         count: 120
        //     },
        //      quality: 0
        // }
    ]
};
const user = getAuth();
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        actSetCartUser(state, { payload }) {
            state.cart = payload;
        },
        actAddItem(state, action) {
            if (state.cart.some((item) => item.id === action.payload.id)) {
                const idx = state.cart.findIndex(
                    (item) => item.id === action.payload.id
                );
                state.cart[idx].quality = state.cart[idx].quality + 1;
            } else {
                const item = { ...action.payload, quality: 1 };
                state.cart.push(item);
            }
            if (user.currentUser) {
                const cartUpdate = state.cart;
                UsersServices.updateCart(user.currentUser.uid, cartUpdate);
            }
        },
        actDeleteItem(state, { payload }) {
            state.cart = state.cart.filter((item) => item.id !== payload);
            if (user) {
                const cartUpdate = state.cart;

                UsersServices.updateCart(user.currentUser.uid, cartUpdate);
            }
        },
        actChangeQuality(state, { payload }) {
            const { id, action } = payload;
            const idx = state.cart.findIndex((item) => item.id === id);
            if (action === 'increase') {
                state.cart[idx].quality = state.cart[idx].quality + 1;
            } else if (action === 'decrease') {
                if (state.cart[idx].quality === 1) {
                    state.cart = state.cart.filter((item) => item.id !== id);
                } else {
                    state.cart[idx].quality = state.cart[idx].quality - 1;
                }
            }
            if (user) {
                const cartUpdate = state.cart;

                UsersServices.updateCart(user.currentUser.uid, cartUpdate);
            }
        },
        actResetCart: () => {
            if (user) {
                UsersServices.updateCart(
                    user.currentUser.uid,
                    initialState.cart
                );
            }
            return initialState;
        }
    }
});

export const {
    actAddItem,
    actDeleteItem,
    actChangeQuality,
    actSetCartUser,
    actResetCart
} = cartSlice.actions;

export default cartSlice.reducer;
