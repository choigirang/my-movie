import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { selectMovieSlice } from "./modules/selectData";

const makeStore = () => {
  const rootReducer = combineReducers({
    movieSlice: selectMovieSlice,
  });

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === "development", // 개발자도구 설정
  });

  return store;
};

const store = makeStore();

// store 엑스포트
export default store;

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
