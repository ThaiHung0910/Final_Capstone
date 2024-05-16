import { createAsyncThunk } from "@reduxjs/toolkit";
import { courseService } from "../../services/courseService";
import { userService } from "../../services/userService";

export const getListCourseThunk = createAsyncThunk(
  "courseReducer/getListCourseThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await courseService.getListCourse();
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const getCourseSearchListThunk = createAsyncThunk(
  "courseReducer/getCourseSearchListThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await courseService.getCourseSearchList(payload);
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const getCourseCategoryListThunk = createAsyncThunk(
  "courseReducer/getCourseCategoryListThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await courseService.getCourseCategoryList(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const registerCourseThunk = createAsyncThunk(
  "courseReducer/registerCourseThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await courseService.registerCourse(payload);
      const newRes = await userService.getInfoUser()
      return newRes.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const cancelCourseThunk = createAsyncThunk(
  "courseReducer/cancelCourseThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await courseService.cancelCourse(payload);
      const newRes = await userService.getInfoUser()
      return newRes.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

