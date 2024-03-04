import { SelectMovieData } from "@/type/movie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";

const initialState: SelectMovieData = {
  id: 1,
  title: undefined,
  genre_ids: undefined,
};

export const selectMovieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    saveSelectMovie: (
      state: SelectMovieData,
      action: PayloadAction<SelectMovieData>
    ) => {
      const { id, title, genre_ids } = action.payload;
      return { ...state, id, title, genre_ids };
    },
    resetSelect: () => initialState,
  },

  extraReducers(builder) {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => ({ ...state, ...payload.page })
    );
  },
});

export const { saveSelectMovie, resetSelect } = selectMovieSlice.actions;
export default selectMovieSlice;
