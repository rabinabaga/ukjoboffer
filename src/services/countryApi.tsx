import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Country } from 'types/country';
import { baseQuery } from './baseApi';

export interface Countrys {
    _id: string;
    name: string;
    email: string;
    image: string;
}

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        countries: builder.query<Country, void>({
            query: () => '/job/settings/country'
        }),
        country: builder.query<Country[], string>({
            query: (id) => `/job/settings/country/${id}`
        }),
        addCountry: builder.mutation<void, FormData>({
            query: (jobCategory) => ({
                url: `/job/settings/country`,
                method: 'POST',
                body: jobCategory
            })
        }),
        updateCountry: builder.mutation<Countrys, { id: string; formData: FormData }>({
            query: ({ id, formData }) => ({
                url: `/job/settings/country/${id}`,
                method: 'PUT',
                body: formData
            })
        }),
        deleteCountry: builder.mutation<void, string>({
            query: (id) => ({
                url: `/job/settings/country/${id}`,
                method: 'DELETE'
            })
        })
    })
});

export const { useCountriesQuery, useCountryQuery, useAddCountryMutation, useUpdateCountryMutation, useDeleteCountryMutation } = countryApi;
