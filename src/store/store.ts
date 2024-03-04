import {
  combineReducers,
  configureStore,
  PayloadAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { selectMovieSlice } from "./modules/selectData";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  // 리덕스 persist 포함 목록
  whitelist: ["movieSlice"],
};

const reducer = (state: any, action: PayloadAction<any>) => {
  if (action.type === HYDRATE) {
    // SSR 작업 수행 시 HYDRATE 라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐주는 작업을 수행
    return {
      ...state,
      ...action.payload,
    };
  }

  return combineReducers({
    // 정의한 리듀서 모듈들을 결합
    movieSlice: selectMovieSlice.reducer,
    // 리듀서 모듈(slice)을 추가할 때마다 combineReducers 함수의 인자로 전달되는 객체 내부에 추가해줘야함
  })(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
  });

export const persistor = persistStore(makeStore());

export const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof persistor.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
