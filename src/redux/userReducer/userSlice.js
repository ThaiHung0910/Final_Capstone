import { createSlice } from "@reduxjs/toolkit";
import {
  getInfoUserThunk,
  loginThunk,
  registerThunk,
  updateThunk,
} from "./userThunk";
import { updateUserLocalStorage, userLocal } from "../../services/localService";

const initialState = {
  infoUser: userLocal.get(),
  errorMessage: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logOutAction: (state, action) => {
      userLocal.delete();
      state.infoUser = null;
    },
    resetErrorMessage: (state, action) => {
      state.errorMessage = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.fulfilled, (state, action) => {

        if (action.payload) {
          state.infoUser = action.payload;
          userLocal.set(action.payload);
        }
      })
      .addCase(registerThunk.rejected, (state, action) => {
        const messErr = action.payload.response.data;
        console.log(messErr);
        state.errorMessage = messErr;
      })
      .addCase(updateThunk.fulfilled, (state, action) => {
        const newData = updateUserLocalStorage(action.payload);
        if (newData) {
          state.infoUser = newData;
        }
      })
      .addCase(getInfoUserThunk.fulfilled, (state, action) => {
        const newData = updateUserLocalStorage(action.payload);
        if (newData) {
          state.infoUser = newData;
        }
      });
  },
});

export const { logOutAction, resetErrorMessage } = userSlice.actions;

export default userSlice.reducer;
