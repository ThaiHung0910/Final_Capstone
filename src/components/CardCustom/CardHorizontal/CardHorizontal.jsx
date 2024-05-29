import React from "react";
import { avatar, imageNotFound } from "../../../assets/img/js/img";
import { useNavigate } from "react-router-dom";
import {
  cancelCourseThunk,
  registerCourseThunk,
} from "../../../redux/courseReducer/courseThunk";
import { useDispatch, useSelector } from "react-redux";
import ConfirmAction from "../../ConfirmAction/ConfirmAction";

const CardHorizontal = ({ course, type }) => {
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
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = imageNotFound;
          }}
          alt=""
          className="Img"
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
            {course?.moTa.split(" ").length > 10
              ? course?.moTa.split(" ").slice(0, 10).join(" ") + "..."
              : course?.moTa}
          </p>

          <div className="CardFooterGlobal">
            <div className="flex items-center ImgCardAvatar">
              <img src={avatar[1]} alt="" />
              <span className="ml-2">{name}</span>
            </div>

            <div>
              <p>
                700.000<sup>đ</sup>
              </p>
              <p>
                500.000<sup>đ</sup>
                <i className="fas fa-tag iconTag"></i>
              </p>
            </div>

            <div>
              {renderButton()}
              <button
                onClick={() => navigate(path)}
                className="BtnGlobal ml-2"
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardHorizontal;
