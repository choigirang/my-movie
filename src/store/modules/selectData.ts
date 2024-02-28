import { SelectMovieData } from "@/type/movie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: SelectMovieData = {
  id: undefined,
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
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.genre_ids = action.payload.genre_ids;
    },
    resetSelect: () => initialState,
  },
});

export const { saveSelectMovie, resetSelect } = selectMovieSlice.actions;
export default selectMovieSlice.reducer;
