import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import http from "../services/http";
import { TOKEN_KEY } from "../ts/constants";
import { ApiRoutes } from "../ts/enum/apiRoutes";
import { CredentialsInterface } from "../ts/interfaces";

const getUserInfo = async () => {
  try {
    return await http.get(ApiRoutes.UserInfo);
  } catch (error) {
    return null;
  }
};
let newUser = null;
getUserInfo().then((userInfo: any) => {
  newUser = userInfo;
});
const token = localStorage.getItem(TOKEN_KEY) ? localStorage.getItem(TOKEN_KEY) : null;

export interface UserInterface {
  username: string;
  password: string | number | null;
  name: string;
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
