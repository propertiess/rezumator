import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RezumatorState } from '@/store/slices/rezumator';

export const fieldsApi = createApi({
  reducerPath: 'fieldsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BASE_URL }),
  endpoints: builder => ({
    getFieldsById: builder.query<RezumatorState, unknown>({
      query: (id: string) => ({
        url: `users/${id}/fields`,
        headers: { secret: process.env.SECRET_KEY }
      })
    }),
    setFieldsById: builder.mutation({
      query: ({ id, fields }: { id: string; fields: RezumatorState }) => ({
        url: `users/${id}/fields`,
        headers: { secret: process.env.SECRET_KEY },
        method: 'POST',
        body: fields
      })
    })
  })
});

export const { useGetFieldsByIdQuery, useSetFieldsByIdMutation } = fieldsApi;
