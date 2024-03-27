import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type LoginInitial = {
  id: string;
  nickname: string;
  image: string;
};

const initialState: LoginInitial = {
  id: "",
  nickname: "",
  image: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    login: (state: LoginInitial, action: PayloadAction<LoginInitial>) => ({
      ...state,
      ...action.payload,
    }),
    logout: () => initialState,
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice;
