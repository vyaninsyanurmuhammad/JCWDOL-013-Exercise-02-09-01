import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/Interfaces/IUser";
import { addUserThunk, getUserThunk } from "./register-thunk";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [],
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    
    builder.addCase(addUserThunk.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
    });
  },
});

export const registerActions = registerSlice.actions;
export default registerSlice.reducer;
