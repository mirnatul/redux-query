import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './features/tasks/tasksSlice';
import userSlice from './features/user/userSlice';
import baseApi from './features/api/baseApi';

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    tasksSlice: tasksSlice,
    userSlice: userSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware) //api related
});

export default store;
