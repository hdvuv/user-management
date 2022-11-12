import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// User
export interface User {
    id: string,
    name: string,
    sex: string,
    phone: string,
    email: string,
    address: string,
    job: string,
    company: string,
    position: string,
    workingAddress: string
}

// List User
type UsersResponse = User[];

export const userApi = createApi({
    reducerPath: 'user api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUser: builder.query<User, string>({
            query: (id: string) => ({ url: `/users/${id}`, method: 'GET' }),
            providesTags: (result, error, id) => [{ type: 'User', id }],
        }),
        getUsers: builder.query<UsersResponse, void>({
            query: () => 'users',
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'User' as const, id })),
                        { type: 'User', id: 'LIST' },
                    ]
                    : [{ type: 'User', id: 'LIST' }],
        }),
        createUser: builder.mutation<User, Partial<User>>({
            query: (body) => ({
                url: `users`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }],
        }),
    }),
})

export const {
    useGetUserQuery,
    useGetUsersQuery,
    useCreateUserMutation
} = userApi;
