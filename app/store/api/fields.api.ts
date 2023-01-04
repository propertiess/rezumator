import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RezumatorState } from '@/store/slices/rezumator';

export const fieldsApi = createApi({
  reducerPath: 'fieldsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: builder => ({
    getFieldsById: builder.query<RezumatorState, string>({
      query: (id: string) => ({
        url: `users/${id}/fields`,
        headers: { secret: process.env.SECRET_KEY }
      })
    }),
    setFieldsById: builder.mutation<
      RezumatorState,
      { id: string; fields: RezumatorState }
    >({
      query: ({ id, fields }) => ({
        url: `users/${id}/fields`,
        headers: { secret: process.env.SECRET_KEY },
        method: 'POST',
        body: fields
      })
    })
  })
});

export const { useGetFieldsByIdQuery, useSetFieldsByIdMutation } = fieldsApi;
