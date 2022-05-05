import { actResetCheckOutState } from 'pages/CheckOut/checkOutSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actResetCart } from 'slices/cartSlice';

function useClearInfo() {
    //Sử dụng để clear thông tin mua sắm
    const dispatch = useDispatch();

    return function () {
        dispatch(actResetCheckOutState());
        dispatch(actResetCart());
    };
}

export default useClearInfo;
