import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const getAccessToken = () => {
    return localStorage.getItem('serviceToken') || '';
};
export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URI,
    prepareHeaders: (headers) => {
        const token = getAccessToken();

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});
