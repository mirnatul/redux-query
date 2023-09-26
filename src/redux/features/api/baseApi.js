import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data
            })
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: 'POST',
                body: task
            })
        })
    })
});

export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation } = baseApi;

export default baseApi
