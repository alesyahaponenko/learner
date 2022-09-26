import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const avatarApi = createApi({
  reducerPath: 'avatarApi',
  baseQuery: fetchBaseQuery({ baseUrl: "/"}),
  endpoints: (builder) => ({
    getPredictions: builder.query({
      query: (data) => ({
        url: process.env.BASE_URL,
        method: 'POST',
        body: {
          sender: "test_client",
          query: data,
        },
      }),
      //transformResponse: (response) => response.data
    }),
    getAvatarInfo: builder.query({
      query: () => '/api/data',
    }),
  }),
})

export const { useGetPredictionsQuery, useGetAvatarInfoQuery } = avatarApi