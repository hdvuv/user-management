import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PATH } from '../../constants/Common';

// Admin
export interface Admin {
  id: string;
  username: string;
  password: string;
}

// List Admin
type AdminsResponse = Admin[];

export const adminApi = createApi({
  reducerPath: 'admin api',
  baseQuery: fetchBaseQuery({ baseUrl: PATH.BASE_QUERY }),
  tagTypes: ['Admin'],
  endpoints: (builder) => ({
    getAdmins: builder.query<AdminsResponse, void>({
      query: () => 'admins',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Admin' as const, id })),
              { type: 'Admin', id: 'LIST' },
            ]
          : [{ type: 'Admin', id: 'LIST' }],
    }),
  }),
});

export const { useGetAdminsQuery } = adminApi;
