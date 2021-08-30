import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
export interface LoginState {
  login: boolean;
}

const initialState: LoginState = {
  login: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    doLogin: (state) => {
      state.login = true;
    },
    doLogout: (state) => {
      state.login = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { doLogin, doLogout } = loginSlice.actions;

export default loginSlice.reducer;
