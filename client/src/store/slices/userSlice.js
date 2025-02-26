import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loading: false,
  error: null,
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signinStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signinSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    signinFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { signinStart, signinSuccess, signinFailure, signOut } = userSlice.actions;
export default userSlice.reducer;
