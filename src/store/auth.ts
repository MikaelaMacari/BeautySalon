import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOKEN_KEY } from "../ts/constants";
import { CredentialsInterface } from "../ts/interfaces";

const newUser = null;
const token = localStorage.getItem(TOKEN_KEY) ? localStorage.getItem(TOKEN_KEY) : null;

export interface UserInterface {
  username: string;
  password: string | number | null;
}

interface AuthStateInterface {
  userInfo: Partial<UserInterface> | null;
  loading: boolean;
  token: string | null;
}

const initialState: AuthStateInterface = {
  userInfo: newUser,
  loading: false,
  token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: AuthStateInterface, { payload: { token, user: userInfo } }: PayloadAction<CredentialsInterface>) => {
      localStorage.setItem(TOKEN_KEY, token);
      return { ...state, userInfo, token };
    },
    logout: (state: AuthStateInterface) => {
      localStorage.removeItem(TOKEN_KEY);
      return { ...state, userInfo: null, token: null };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
