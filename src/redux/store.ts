import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./feature/register-slice";

export const store = configureStore({
  reducer: { registerReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
