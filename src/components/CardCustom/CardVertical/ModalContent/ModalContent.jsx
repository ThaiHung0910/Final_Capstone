import React from "react";
import { Rate } from "antd";

const ModalContent = ({
  course,
  imageNotFound,
  navigate,
  avatar,
  name,
  logo,
}) => {
  let path = `/chitiet/${course.maKhoaHoc}`;
  return (
    <>
      <div className="w-2/3 ">
        <div className="flex space-x-4 py-5 border-b justify-between">
          <div
            onClick={() => {
              navigate(`/chitiet/${course.maKhoaHoc}`);
            }}
            className="w-1/2 h-44 overflow-hidden cursor-pointer"
          >
            <img
              src={course.hinhAnh}
              className="w-full hover:w-[105%] h-full hover:h-[105%] object-cover rounded duration-200"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = imageNotFound;
              }}
              alt=""
            />
          </div>

          <div className="w-1/2 space-y-3">
            <h1
              onClick={() => {
                navigate(path);
              }}
              className="font-bold text-2xl cursor-pointer"
            >
              {course.tenKhoaHoc}
            </h1>

            <p className="text-lg">{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
            <p>Thời gian học : 6 tháng</p>
          </div>
        </div>
        <div className="mt-3">
          <ul className="flex">
            <li className="mr-7 pr-7 border-r-slate-300 border-r-2 relative">
              <div className="flex items-center">
                <div className="mr-2">
                  <img
                    alt="User Avatar"
                    src={avatar[2]}
                    height="50"
                    width="50"
                  />
                </div>
                <div>
                  <label>Giáo viên</label>
                  <h3 className="font-bold">{name}</h3>
                </div>
              </div>
            </li>
            <li className="mr-7 pr-7 border-r-slate-300 border-r-2">
              <div className="flex flex-col items-center h-full justify-center">
                <label>Học viên</label>
                <p className="font-bold">27</p>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center h-full justify-center">
                <div className="w-full ml-1">
                  <h3>Đánh giá</h3>
                </div>
                <div className="flex w-full ml-1">
                  <Rate disabled allowHalf defaultValue={5} />
                  <span className="ml-1">(7 đánh giá)</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-5 py-6">
          <h3 className="text-3xl font-bold">Mô tả</h3>
          <p>
            {course?.moTa?.length > 100
              ? course.moTa.substr(0, 70) + "..."
              : "Lập trình hiện đang là xu hướng trên toàn thế giới..."}
          </p>
        </div>

        <div className="flex items-center justify-center h-12">
          <button
            onClick={() => {
              navigate(path);
            }}
            className="w-2/3 BtnGlobal"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
      <div
        className={
          "w-1/3 space-y-8 xl:h-full md:h-full  duration-700 bg-cover bg-center rounded flex flex-col items-center justify-center"
        }
      >
        <img className="bg-blue-600" height={200} src={logo[0]} alt="" />
        <p className="text-xl  mx-auto text-center">
          Bạn cần đăng nhập để đăng ký <br /> khóa học
        </p>
        <p className="font-bold text-2xl mx-auto">{course.tenKhoaHoc}</p>
        <button
          onClick={() => {
            navigate("/auth/login");
          }}
          className="BtnGlobal w-full"
        >
          Đăng nhập
        </button>
      </div>
    </>
  );
};

export default ModalContent;
