import { createAsyncThunk } from "@reduxjs/toolkit";
import { courseService } from "../../services/courseService";
import { userService } from "../../services/userService";
import { message } from "antd";


export const getListCourseThunk = createAsyncThunk(
  "courseReducer/getListCourseThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await courseService.getListCourse();
      return res.data;
    } catch (err) {
      message.error(err.response.data)
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
      return rejectWithValue(err);
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
      await courseService.registerCourse(payload);
      const newRes = await userService.getInfoUser()
      message.success("Đăng ký thành công")
      return newRes.data;
    } catch (err) {
      message.error(err.response.data || "Đăng ký không thành công")
      return rejectWithValue(err);
    }
  }
);

export const cancelCourseThunk = createAsyncThunk(
  "courseReducer/cancelCourseThunk",
  async (payload, { rejectWithValue }) => {
    try {
      await courseService.cancelCourse(payload);
      const newRes = await userService.getInfoUser()
      message.success("Hủy khóa học thành công")
      return newRes.data;
    } catch (err) {
      message.error(err.response.data || "Hủy khóa học thất bại")
      return rejectWithValue(err);
    }
  }
);

