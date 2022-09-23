import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const avatarApi = createApi({
    reducerPath: 'avatarApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/data' }),
    endpoints: (builder) => ({
        getAvatarInfo: builder.query({
           // query: (name) => `pokemon/${name}`,
           query: (data) =>  data,
        }),
    }),
})

export const { useGetAvatarInfoQuery } = avatarApi