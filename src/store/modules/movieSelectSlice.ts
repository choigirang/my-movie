import { SelectMovieData } from "@/type/movie";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";
import { RehydrateAction } from "redux-persist";

export const initialState: SelectMovieData = {
  id: 1,
  title: "",
  original_title: "",
  genre_ids: [],
  overview: "",
  poster_path: "",
  vote_average: 0,
  release_date: "",
  date: "",
};

export const movieSelectSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    selectMovie: (
      state: SelectMovieData,
      action: PayloadAction<SelectMovieData>
    ) => ({
      ...state,
      ...action.payload,
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

export const { selectMovie, resetSelect } = movieSelectSlice.actions;
export default movieSelectSlice;
