import React from "react";
import { avatar, imageNotFound } from "../../../assets/img/js/img";
import { useNavigate } from "react-router-dom";
import {
  cancelCourseThunk,
  registerCourseThunk,
} from "../../../redux/courseReducer/courseThunk";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveMiddleScreen } from "../../../HOC/responsive";
import ConfirmAction from "../../ConfirmAction/ConfirmAction";

const CardHorizontal = ({ course, number, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { maKhoaHoc } = course;
  const path = `/chitiet/${maKhoaHoc}`;
  const name =
    course.nguoiTao?.hoTen?.length < 25 ? course.nguoiTao?.hoTen : "Harry";
  const { infoUser } = useSelector((state) => state.userReducer);

  let renderButton = () => {
    let params = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: infoUser?.taiKhoan,
    };

    return type === "register" ? (
      <ConfirmAction
        title={"Đăng ký khóa học"}
        description={"Bạn xác nhận đăng ký khóa học này?"}
        action={() => {
          dispatch(registerCourseThunk(params));
        }}
        button={<button className="BtnGlobal">Đăng ký</button>}
        infoUser={infoUser}
        requiredMessage={"Vui lòng đăng nhập để đăng ký khóa học"}
      />
    ) : (
      <ConfirmAction
        title={"Hủy khóa học"}
        description={"Bạn xác nhận hủy khóa học này?"}
        action={() => {
          dispatch(cancelCourseThunk(params));
        }}
        button={<button className="BtnGlobal">Hủy đăng ký</button>}
        infoUser={infoUser}
      />
    );
  };

  return (
    <li className="flex CardHorizontal mb-7">
      <div className="Wrapper relative">
        <img
          src={course?.hinhAnh}
          onClick={() => navigate(path)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imageNotFound;
          }}
          alt=""
          className="Img cursor-pointer"
        />

        <div className="Avatar">
          <div className="AvatarItem">
            <div className="flex flex-col items-center text-blue-400">
              <img src={avatar[2]} alt="" />
              <span>{name}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4  w-full">
        <div className="space-y-3 py-2">
          <h2 className="font-bold">{course?.tenKhoaHoc}</h2>
          <p>
            {course?.moTa.split(" ").length > 20
              ? course?.moTa.split(" ").slice(0, 20).join(" ") + "..."
              : course?.moTa}
          </p>

          <div className="CardFooterGlobal">
            <div className="flex items-center ImgCardAvatar">
              <img src={avatar[1]} alt="" />
              <span className="ml-2">{name}</span>
            </div>

            <div>
              <p>
                {number[0]}00.000<sup>đ</sup>
              </p>
              <p>
                {number[1]}00.000<sup>đ</sup>
                <i className="fas fa-tag iconTag"></i>
              </p>
            </div>

            <div>
              {renderButton()}
              <ResponsiveMiddleScreen>
                <button
                  onClick={() => navigate(path)}
                  className="BtnGlobal ml-2"
                >
                  Xem chi tiết
                </button>
              </ResponsiveMiddleScreen>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardHorizontal;
