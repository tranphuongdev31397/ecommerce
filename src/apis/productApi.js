import axiosClient from './axiosClient';

export const productApi = {
    getInCategory: (category, params) => {
        const url = `/products/category/${category}`;
        return axiosClient.get(url, { params });
    }
};
