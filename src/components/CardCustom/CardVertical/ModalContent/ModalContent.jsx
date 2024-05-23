import React from "react";
import { Rate } from "antd";
import { logo } from "../../../../assets/img/js/img";

const ModalContent = ({ course, imageNotFound, navigate, avatar, name }) => {
  let path = `/chitiet/${course.maKhoaHoc}`;
  return (
    <>
      <div className="w-2/3 ">
        <div className="flex space-x-4 py-5 border-b justify-between">
          <div
            className="w-1/2 h-44 overflow-hidden"
          >
            <img
              src={course.hinhAnh}
              className="w-full  h-full  object-cover rounded"
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
              className="font-bold text-2xl"
            >
              {course.tenKhoaHoc}
            </h1>

            <p className="text-lg">{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
            <p>Thời gian học : 6 tháng</p>
          </div>
        </div>
        <div className="mt-3">
          <ul className="flex">
            <li className="mr-7 pr-7  border-r-2 relative">
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
            <li className="mr-7 pr-7  border-r-2">
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
          <p className="w-4/5">
            {course?.moTa?.length > 100
              ? course.moTa.substr(0, 100) + "..."
              : "Lập trình hiện đang là xu hướng trên toàn thế giới..."}
          </p>
        </div>
      </div>
      <div
        className={
          "w-1/3 space-y-8 xl:h-full md:h-full flex flex-col items-center justify-center"
        }
      >
        <img height={200} src={logo[0]} alt="" />
        <p className="text-lg  mx-auto text-center">
          BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC
        </p>
        <p className="font-bold text-2xl mx-auto">{course.tenKhoaHoc}</p>
        <button
          onClick={() => {
            navigate(path);
          }}
          className="BtnGlobal w-full"
        >
          Xem chi tiết
        </button>
      </div>
    </>
  );
};

export default ModalContent;
