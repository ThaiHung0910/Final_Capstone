import { MA_NHOM, http } from "./urlConfig";

export const courseService = {
  getCourseCategory: (data) => {
    let uri = "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc";
    return http.get(uri, data);
  },
  getListCourse: (data) => {
    let uri = "api/QuanLyKhoaHoc/LayDanhSachKhoaHoc";
    return http.get(uri, data);
  },
  getCourseSearchList: (tuKhoa) => {
    let uri = `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tuKhoa}&MaNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  getCourseDetail: (maKhoaHoc) => {
    let uri = `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`;
    return http.get(uri);
  },
  getCourseCategoryList: (maDanhMuc) => {
    let uri = `api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  registerCourse: (data) => {
    let uri = "/api/QuanLyKhoaHoc/DangKyKhoaHoc";
    return http.post(uri, data);
  },
  cancelCourse: (data) => {
    let uri = "/api/QuanLyKhoaHoc/HuyGhiDanh";
    return http.post(uri, data);
  },
};
