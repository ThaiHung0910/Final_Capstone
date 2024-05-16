import {  http } from "./urlConfig";

export const userService = {
  postLogin: (data) => {
    let uri = "/api/QuanLyNguoiDung/DangNhap";
    return http.post(uri, data);
  },
  postRegister: (data) => {
    let uri = "/api/QuanLyNguoiDung/DangKy";
    return http.post(uri, { ...data});
  },
  getInfoUser: () => {
    let uri = '/api/QuanLyNguoiDung/ThongTinNguoiDung'
    return http.post(uri)
  },
  putUpdateInfo: (data) => {
    let uri = "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return http.put(uri, data);
  },
};
