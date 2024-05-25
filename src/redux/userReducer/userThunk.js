import { createAsyncThunk } from "@reduxjs/toolkit";
import { message } from "antd";
import { turnOnLoading, turnOffLoading } from "../loadingReducer/loadingSlice";
import { userService } from "../../services/userService";

export const loginThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      dispatch(turnOnLoading());
      const data = await userService.postLogin(payload.value);
      let infoUser = data.data;

      payload.navigateCus();
      message.success("Đăng nhập thành công");

      dispatch(turnOffLoading());
      return infoUser;
    } catch (error) {
      dispatch(turnOffLoading());
      message.error(error.response.data || "Tài khoản hoặc mật khẩu không đúng");
      return rejectWithValue(error);
    }
  }
);

export const registerThunk = createAsyncThunk(
  "userReducer/registerThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userService.postRegister(payload.value);
      let infoUser = data.data;
      payload.navigateCustom();
      message.success("Đăng ký thành công");

      return infoUser;
    } catch (err) {
      message.error(err.response.data || "Đăng ký thất bại");
      return rejectWithValue(err);
    }
  }
);

export const updateThunk = createAsyncThunk(
  "userReducer/updateThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userService.putUpdateInfo(payload);
      let infoUser = data.data;

      message.success("Cập nhật thành công");
      let updateInfo = await userService.postLogin({
        taiKhoan: infoUser.taiKhoan,
        matKhau: infoUser.matKhau,
      });
      return updateInfo.data;
    } catch (err) {
      message.error(err.response.data || "Cập nhật thất bại");
      return rejectWithValue(err);
    }
  }
);

export const getInfoUserThunk = createAsyncThunk(
  "userReducer/getInfoUserThunk",
  async (payload, { rejectWithValue }) => {
    try {
      let res = await userService.getInfoUser();
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
