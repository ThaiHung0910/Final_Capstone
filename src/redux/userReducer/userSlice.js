import { createSlice } from "@reduxjs/toolkit";
import {
  getInfoUserThunk,
  loginThunk,
  registerThunk,
  updateThunk,
} from "./userThunk";
import { userLocal } from "../../services/localService";

const initialState = {
  infoUser: userLocal.get(),
  errorMessage: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logOutAction: (state, action) => {
      state.infoUser = null;
      userLocal.delete();
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
        if (action.payload) {
          let newData = { ...state.infoUser, ...action.payload };
          state.infoUser = newData;
          userLocal.set(newData);
        }
      })
      .addCase(getInfoUserThunk.fulfilled, (state, action) => {
        if (action.payload) {
          let newData = { ...state.infoUser, ...action.payload };
          state.infoUser = newData;
          userLocal.set(newData);
        }
      });
  },
});

export const { logOutAction, resetErrorMessage } = userSlice.actions;

export default userSlice.reducer;
