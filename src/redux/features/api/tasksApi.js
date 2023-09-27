import baseApi from "./baseApi";

const taskApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags: ['Tasks'] //caching
        }),
        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Tasks'] // caching
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: "/tasks",
                method: 'POST',
                body: task
            }),
            invalidatesTags: ['Tasks'] //caching
        })
    })
})

export const { useAddTaskMutation, useGetTasksQuery, useUpdateTaskMutation } = taskApi