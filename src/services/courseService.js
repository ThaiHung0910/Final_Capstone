import { MA_NHOM, http } from "./urlConfig";

export const courseService = {
  getCourseCategory: (data) => {
    let url = "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc";
    return http.get(url, data);
  },
  getListCourse: (data) => {
    let url = "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc";
    return http.get(url, data);
  },
  getCourseSearchList: (tuKhoa) => {
    let url = `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tuKhoa}&MaNhom=${MA_NHOM}`;
    return http.get(url);
  },
  getCourseDetail: (maKhoaHoc) => {
    let url = `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`;
    return http.get(url);
  },
  getCourseCategoryList: (maDanhMuc) => {
    let url = `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${MA_NHOM}`;
    return http.get(url);
  },
  registerCourse: (data) => {
    let url = "/api/QuanLyKhoaHoc/DangKyKhoaHoc";
    return http.post(url, data);
  },
  cancelCourse: (data) => {
    let url = "/api/QuanLyKhoaHoc/HuyGhiDanh";
    return http.post(url, data);
  },
};
