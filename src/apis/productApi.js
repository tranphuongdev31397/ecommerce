import axiosClient from './axiosClient';

export const productApi = {
    getAll: (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    },
    getInCategory: (category, params) => {
        const url = `/products/category/${category}`;
        return axiosClient.get(url, { params });
    },
    getProductDetail: (id, params) => {
        const url = `products/${id}`;
        return axiosClient.get(url, { params });
    }
};
