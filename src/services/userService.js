import {  http } from "./urlConfig";

export const userService = {
  postLogin: (data) => {
    let url = "/api/QuanLyNguoiDung/DangNhap";
    return http.post(url, data);
  },
  postRegister: (data) => {
    let url = "/api/QuanLyNguoiDung/DangKy";
    return http.post(url, { ...data});
  },
  getInfoUser: () => {
    let url = '/api/QuanLyNguoiDung/ThongTinNguoiDung'
    return http.post(url)
  },
  putUpdateInfo: (data) => {
    let url = "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return http.put(url, data);
  },
};
