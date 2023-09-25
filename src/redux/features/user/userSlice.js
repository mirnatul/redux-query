import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth'

const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: '',
};

export const createUser = createAsyncThunk('userSlice/createUser', async () => {
  createUserWithEmailAndPassword()
})

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
