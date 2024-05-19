import { createSlice } from "@reduxjs/toolkit";
import {
  cancelCourseThunk,
  getCourseCategoryListThunk,
  getCourseSearchListThunk,
  getListCourseThunk,
  registerCourseThunk,
} from "./courseThunk";
import { message } from "antd";
import { userLocal } from "../../services/localService";

const initialState = {
  coursesCategory: [],
  coursesList: [],
  coursesSearchList: [],
  courseDetail: {},
  coursesCategoryList: [],
  infoUserCourseRegister: {},
};

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    getCourseCategoryAction: (state, action) => {
      state.coursesCategory = action.payload;
    },
    getCourseDetailAction: (state, action) => {
      state.courseDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListCourseThunk.fulfilled, (state, action) => {
        state.coursesList = action.payload;
      })
      .addCase(getCourseSearchListThunk.fulfilled, (state, action) => {
        state.coursesSearchList = action.payload;
      })
      .addCase(getCourseSearchListThunk.rejected, (state, action) => {
        state.coursesSearchList = [];
      })
      .addCase(getCourseCategoryListThunk.fulfilled, (state, action) => {
        state.coursesCategoryList = action.payload;
      })
      .addCase(registerCourseThunk.fulfilled, (state, action) => {
        if (action.payload) {
          let infoUser = userLocal.get();
          let newData = { ...infoUser, ...action.payload };
          state.infoUserCourseRegister = newData;
          userLocal.set(newData);
        }
      })
      .addCase(registerCourseThunk.rejected, (state, action) => {
        message.error(action.payload);
      })
      .addCase(cancelCourseThunk.fulfilled, (state, action) => {
        if (action.payload) {
          let infoUser = userLocal.get();
          let newData = { ...infoUser, ...action.payload };
          state.infoUserCourseRegister = newData;
          userLocal.set(newData);
        }
      });
  },
});

export const { getCourseCategoryAction, getCourseDetailAction } =
  courseSlice.actions;

export default courseSlice.reducer;
