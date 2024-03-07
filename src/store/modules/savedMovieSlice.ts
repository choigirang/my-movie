import { SavedMovieData, SelectMovieData } from "@/type/movie";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: SavedMovieData = {
  "2024-3-6": [
    {
      id: 1,
      title: "최기랑의 제작 영화",
      original_title: "",
      genre_ids: [],
      overview: "",
      poster_path: "",
      vote_average: 0,
      release_date: "",
    },
  ],
};

export const savedMovieSlice = createSlice({
  name: "savedMovieSlice",
  initialState,
  reducers: {
    savedMovie: (
      state: SavedMovieData,
      action: PayloadAction<SelectMovieData>
    ) => {
      const { date, ...rest } = action.payload;

      // date 키가 이미 initialState에 존재하는지 확인
      if (date in state) {
        const isDuplicateId = state[date].some((item) => item.id === rest.id);
        if (isDuplicateId) return alert("존재하는 영화입니다.");
        // 존재한다면 해당 date 키의 배열에 객체 추가
        state[date].push({ ...rest });
        alert("저장되었습니다.");
      } else {
        // 존재하지 않는다면 새로운 date 키를 initialState에 추가하고 객체 추가
        state[date] = [{ ...rest }];
        alert("저장되었습니다.");
      }
    },
    deleteMovie: (
      state: SavedMovieData,
      action: PayloadAction<SelectMovieData>
    ) => {
      const { date, title } = action.payload;

      if (date in state) {
        state[date] = state[date].filter((movie) => movie.title !== title);
        return alert("데이터가 삭제되었습니다.");
      } else {
        return alert("데이터가 존재하지 않습니다.");
      }
    },
  },
});

export const { savedMovie, deleteMovie } = savedMovieSlice.actions;
export default savedMovieSlice;
