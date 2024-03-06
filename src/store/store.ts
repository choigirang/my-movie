import {
  combineReducers,
  configureStore,
  PayloadAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import movieSelectSlice from "./modules/movieSelectSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import savedMovieSlice from "./modules/savedMovieSlice";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["savedMovieSlice"],
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
    movieSlice: movieSelectSlice.reducer,
    savedMovieSlice: savedMovieSlice.reducer,
  })(state, action);
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

const makeStore = () => {
  return store;
};

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
