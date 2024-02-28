import { SelectMovieData } from "@/type/movie";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.genre_ids = action.payload.genre_ids;
    },
    resetSelect: () => initialState,
  },

  // /** 페이지 이동 시 상태 초기화가 필요한 경우 추가해야 함 */
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state
  //       // ...action.payload.counter
  //     };
  //   }
  // }
});

export const { saveSelectMovie, resetSelect } = selectMovieSlice.actions;
export default selectMovieSlice;
