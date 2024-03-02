import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/Interfaces/IUser";

export const getUserThunk = createAsyncThunk("register/getUser", async () => {
  const res = await fetch("http://localhost:3000/users");

  const data = await res.json();

  return [...data] as IUser[];
});

export const addUserThunk = createAsyncThunk(
  "register/addUser",
  async (user: IUser) => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(user),
    });

    return user;
  }
);
