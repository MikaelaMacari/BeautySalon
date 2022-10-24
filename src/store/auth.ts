import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInterface {
  username: string;
  password: string | number | null;
}

interface NewUserStateInterface {
  value: Partial<UserInterface> | null;
}

const newUser = null;
const initialState: NewUserStateInterface = {
  value: newUser,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUser: (state: NewUserStateInterface, action: PayloadAction<Partial<UserInterface>>) => {
      return { ...state, value: { ...state.value, ...action.payload } };
    },
    resetUserCredentials: (state: NewUserStateInterface) => {
      return { ...state, value: newUser };
    },
  },
});

export const { updateUser, resetUserCredentials } = usersSlice.actions;
export default usersSlice.reducer;
