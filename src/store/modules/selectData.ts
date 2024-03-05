import { SelectMovieData } from "@/type/movie";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";
import { RehydrateAction } from "redux-persist";

export const initialState: SelectMovieData = {
  id: 1,
  title: "",
  genre_ids: [],
};

export const selectMovieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    saveSelectMovie: (
      state: SelectMovieData,
      action: PayloadAction<SelectMovieData>
    ) => ({
      ...state,
      id: action.payload.id,
      title: action.payload.title,
      genre_ids: action.payload.genre_ids,
    }),
    resetSelect: () => initialState,
  },

  // extraReducers(builder) {
  //   builder.addCase(saveSelectMovie, (state, action) => ({
  //     ...state,
  //     ...action.payload,
  //   }));
  // },
});

export const { saveSelectMovie, resetSelect } = selectMovieSlice.actions;
export default selectMovieSlice;
