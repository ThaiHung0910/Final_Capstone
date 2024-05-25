import React, { useState } from "react";
import { Card, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InfoCircleOutlined } from "@ant-design/icons";
import { avatar, background, imageNotFound } from "../../../assets/img/js/img";
import ModalContent from "./ModalContent/ModalContent";
import {
  registerCourseThunk,
  cancelCourseThunk,
} from "../../../redux/courseReducer/courseThunk";
import { ResponsiveLargeScreen } from "../../../HOC/responsive";
import ConfirmAction from "../../ConfirmAction/ConfirmAction";
const CardVertical = ({ course, isFavorite, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { infoUser } = useSelector((state) => state.userReducer);

  let name =
    course.nguoiTao?.hoTen?.length < 12 ? course.nguoiTao?.hoTen : "Harry";

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderModal = () => {
    return (
      <Modal
        styles={{
          body: {
            padding: "35px",
            background: `url(${background[1]}) no-repeat center / cover`,
          },
          content: { padding: 0 },
        }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        className="duration-700 overflow-hidden"
      >
        <div className="flex flex-nowrap items-center overflow-hidden h-[30rem]">
          <ModalContent
            course={course}
            imageNotFound={imageNotFound}
            navigate={navigate}
            avatar={avatar}
            name={name}
          />
        </div>
      </Modal>
    );
  };

  let renderButton = () => {
    let params = {
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: infoUser?.taiKhoan,
    };

    return type === "cancel" ? (
      <ConfirmAction
        title={"Hủy khóa học"}
        description={"Bạn xác nhận hủy khóa học này?"}
        action={() => {
          dispatch(cancelCourseThunk(params));
        }}
        button={
          <button className="BtnGlobal BtnVertical">Hủy đăng ký</button>
        }
        infoUser={infoUser}
      />
    ) : (
      <ConfirmAction
        title={"Đăng ký khóa học"}
        description={"Bạn xác nhận đăng ký khóa học này?"}
        action={() => {
          dispatch(registerCourseThunk(params));
        }}
        button={<button className="BtnGlobal BtnVertical">Đăng ký</button>}
        infoUser={infoUser}
        requiredMessage={"Vui lòng đăng nhập để đăng ký khóa học"}
      />
    );
  };

  return (
    <div className="relative CardVertical">
      <Card
        hoverable
        className="CardGlobal"
        onClick={() => {
          navigate(`/chitiet/${course.maKhoaHoc}`);
        }}
      >
        <div className="WrapperCourse">
          <div className="Img">
            <img
              src={course.hinhAnh ? course.hinhAnh : imageNotFound}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = imageNotFound;
              }}
              alt=""
            />
          </div>
          <div className="Avatar">
            <div className="AvatarItem">
              <div className="flex flex-col items-center text-white">
                <img src={avatar[2]} alt="" />
                <span>{name}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="CardBodyGlobal">
          <h1>
            {course?.tenKhoaHoc.length > 12 && course?.tenKhoaHoc.length < 27
              ? course.tenKhoaHoc
              : "Lập trình web"}
          </h1>
          <h6 className="">
            {course?.moTa?.length > 100
              ? course.moTa.substr(0, 50) + "..."
              : "Lập trình hiện đang là xu hướng trên toàn thế giới..."}
          </h6>
          <div className="flex items-center justify-between CardIconGlobal">
            <span>
              <i className="far fa-clock"></i>8 giờ
            </span>
            <span>
              <i className="far fa-calendar-alt"></i>4 tuần
            </span>
            <span>
              <i className="fas fa-signal "></i>Tất cả
            </span>
          </div>
        </div>

        <div className="CardFooterGlobal">
          <div className="flex items-center ImgCardAvatar">
            <img src={avatar[1]} alt="" />
            <span className="ml-1">{name}</span>
          </div>
          <div>
            <p>
              700.000<sup>đ</sup>
            </p>
            <p>
              500.000<sup>đ</sup>
              <i className="fas fa-tag IconTag"></i>
            </p>
          </div>
        </div>

        {isFavorite && (
          <div className="CardSale">
            <span>Yêu thích</span>
          </div>
        )}
      </Card>
      {renderButton()}

      <ResponsiveLargeScreen>
        <button onClick={showModal} className="IconInfo">
          <InfoCircleOutlined />
        </button>
      </ResponsiveLargeScreen>

      {renderModal()}
    </div>
  );
};

export default CardVertical;
