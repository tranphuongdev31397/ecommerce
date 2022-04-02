import axiosClient from './axiosClient';

export const categoryApi = {
    getAll: (params) => {
        const url = '/products/categories';
        return axiosClient.get(url, { params });
    }
};
