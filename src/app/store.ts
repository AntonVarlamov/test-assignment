import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";
import stepsSlice from "../features/stepsSlice";

export const store = configureStore({
  reducer: {
    userInfo: userSlice,
    stepsState: stepsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;