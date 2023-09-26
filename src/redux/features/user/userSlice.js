import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import auth from './../../../utils/firebase.config';

const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: '',
};


// async thunk start
export const createUser = createAsyncThunk(
  'userSlice/createUser',
  async ({ email, password, name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    })

    console.log(data);
    return {
      email: data.user.email,
      name: data.user.displayName
    };
  }
);
// async thunk end

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email
    },
    toggleLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    logout: (state) => {
      state.name = ''
      state.email = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.email = '';
        state.name = '';
        state.error = '';
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload.email;
        state.name = payload.name;
        state.error = '';
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.email = '';
        state.name = '';
        state.error = action.error.message;
      });
  }
});

export const { setUser, toggleLoading, logout } = userSlice.actions

export default userSlice.reducer;
