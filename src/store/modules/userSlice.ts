import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type LoginInitial = {
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
  },
});

export const { login } = userSlice.actions;
export default userSlice;
