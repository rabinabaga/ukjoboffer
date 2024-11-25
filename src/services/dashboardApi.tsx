import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseApi';
import { DashboardResponse } from 'types/dashboardResponse';

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        dashboardData: builder.query<DashboardResponse, void>({
            query: () => '/user/superadmin/dashboard',
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        })
    })
});

export const { useDashboardDataQuery } = dashboardApi;
