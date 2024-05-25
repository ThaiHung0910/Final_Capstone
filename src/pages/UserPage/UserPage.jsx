import React, { useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import Background from "../../components/Background/Background";
import { useLocation } from "react-router-dom";
import { avatar } from "../../assets/img/js/img";
import ModalContent from "./ModalContent/ModalContent";
import { getInfoUserThunk } from "../../redux/userReducer/userThunk";
import { useDispatch, useSelector } from "react-redux";
import CardHorizontal from "../../components/CardCustom/CardHorizontal/CardHorizontal";
import CardVertical from "../../components/CardCustom/CardVertical/CardVertical";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import {
  ResponsiveLargeScreen,
  ResponsiveMiddleScreen,
  ResponsiveSmallScreen,
} from "../../HOC/responsive";
import usePagination from "../../utils/pagination/usePagination";

const UserInfoPage = () => {
  const location = useLocation();
  const { pathname, state } = location;
  const keyInput = useRef();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tabState = state?.currentTab || "info";
  const [currentTab, setCurrentTab] = useState(tabState);
  const [searchValue, setSearchValue] = useState("");
  const { infoUser } = useSelector((state) => state.userReducer);
  const { userCoursesRegister } = useSelector((state) => state.courseReducer);

  let itemsPerPage = 12;
  let courseRegister = infoUser?.chiTietKhoaHocGhiDanh || [];

  const filteredCourses = courseRegister.filter((course) =>
    course?.tenKhoaHoc.includes(searchValue)
  );

  const {
    currentPage,
    totalPages,
    handlePageChange,
    paginatedItems: paginatedCourses,
  } = usePagination(filteredCourses, itemsPerPage);

  let showModal = () => {
    setIsModalOpen(true);
  };

  let handleOk = () => {
    setIsModalOpen(false);
  };
  let handleCancel = () => {
    setIsModalOpen(false);
  };

  let renderModal = () => {
    return (
      <Modal
        width={540}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="duration-700 overflow-hidden UpdateModal"
      >
        <ModalContent infoUser={infoUser} setIsModalOpen={setIsModalOpen} />
      </Modal>
    );
  };

  let handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  let renderCourseRegister = (layout) => {
    if (courseRegister.length === 0) {
      return <p className="Error">Bạn chưa đăng ký khóa học nào</p>;
    } else if (filteredCourses.length === 0 && searchValue.length > 0) {
      return (
        <p className="Error">
          Không tìm thấy khóa học nào phù hợp với từ khóa của bạn.
        </p>
      );
    } else {
      return paginatedCourses.map((course, index) => {
        switch (layout) {
          case "horizontal":
            return (
              <CardHorizontal key={index} course={course} type={"cancel"} />
            );
          default:
            return <CardVertical key={index} course={course} type={"cancel"} />;
        }
      });
    }
  };

  let handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
    handlePageChange(1);
  };

  useEffect(() => {
    dispatch(getInfoUserThunk());
  }, [userCoursesRegister]);

  useEffect(() => {
    setCurrentTab(tabState);
  }, [tabState]);

  return (
    <div>
      <Background
        path={[
          {
            href: pathname,
            title: <span className="text-blue-400">Thông tin nguời dùng</span>,
          },
        ]}
      />

      <div className="container mx-auto lg:px-12 px-3 py-12">
        <div className="User flex">
          <ResponsiveLargeScreen>
            <div className="w-1/3">
              <div className="ContentLeft space-y-3">
                <img src={avatar[0]} alt="" />
                <h6 className="font-bold text-xl">{infoUser?.hoTen}</h6>
                <p>Lập trình viên Front-end</p>
                <span>Hồ sơ cá nhân</span>
              </div>
            </div>
          </ResponsiveLargeScreen>
          <div className="lg:w-2/3 w-full">
            <div className="ContentRight space-y-7">
              <div className="Tab">
                <button
                  onClick={() => handleTabChange("info")}
                  className={currentTab === "info" ? "Active" : ""}
                >
                  Thông tin cá nhân
                </button>
                <button
                  onClick={() => handleTabChange("course")}
                  className={currentTab === "course" ? "Active" : ""}
                >
                  Khóa học
                </button>
              </div>

              <div
                className={`Info TabContent ${
                  currentTab === "info" ? "Active" : ""
                } `}
              >
                <div className="grid sm:grid-cols-2 grid-cols-1">
                  <div>
                    <p>
                      Email:<span>{infoUser?.email}</span>
                    </p>
                    <p>
                      Họ và tên: <span>{infoUser?.hoTen}</span>
                    </p>
                    <p>
                      Số điện thoại:{" "}
                      <span>
                        {infoUser?.soDt ? infoUser?.soDt : infoUser?.soDT}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Tài khoản: <span>{infoUser?.taiKhoan}</span>
                    </p>
                    <p>
                      Nhóm: <span>{infoUser?.maNhom}</span>
                    </p>
                    <p>
                      Đối tượng:{" "}
                      <span>
                        {infoUser?.maLoaiNguoiDung === "HV"
                          ? " Học viên"
                          : " Giáo viên"}
                      </span>
                    </p>
                    <button className="BtnGlobal" onClick={showModal}>
                      Chỉnh sửa
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`TabContent ${
                  currentTab === "course" ? "Active" : ""
                }`}
              >
                <section className="flex justify-between items-center bg-[#f6f9fa] mb-3 p-3">
                  <h6 className="font-bold sm:text-xl w-1/2 ">
                    Khóa học của tôi
                  </h6>
                  <div className="flex">
                    <input
                      ref={keyInput}
                      className="w-full text-black border border-solid h-11 rounded-l-lg p-5 text-base focus:outline-none"
                      type="text"
                      placeholder="Tìm kiếm"
                      onChange={handleChangeSearch}
                    />
                    <div className="BtnGlobal BtnSearch flex justify-center">
                      <button
                        type="submit"
                        className="border-none flex items-center text-white  "
                      >
                        <i className="fa fa-search mr-2" />
                      </button>
                    </div>
                  </div>
                </section>

                <div className="grid grid-cols-1">
                  <ResponsiveMiddleScreen>
                    {renderCourseRegister("horizontal")}
                  </ResponsiveMiddleScreen>
                  <ResponsiveSmallScreen>
                    {renderCourseRegister("vertical")}
                  </ResponsiveSmallScreen>
                </div>
                <ButtonPagination
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                  totalPages={totalPages}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {renderModal()}
    </div>
  );
};

export default UserInfoPage;
