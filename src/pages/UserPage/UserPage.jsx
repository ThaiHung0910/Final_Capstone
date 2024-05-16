import React, { useEffect, useRef, useState } from "react";
import { Modal } from "antd";
import Background from "../../components/Background/Background";
import { useLocation } from "react-router-dom";
import { avatar } from "../../assets/img/js/img";
import ModalContent from "./ModalContent/ModalContent";
import { getInfoUserThunk } from "../../redux/userReducer/userThunk";
import { useDispatch, useSelector } from "react-redux";
import CardHorizontal from "../../components/CardCustom/CardHorizontal/CardHorizontal";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import { ResponsiveLargeScreen } from "../../HOC/responsive";

const UserInfoPage = () => {
  const location = useLocation();
  const { pathname, state } = location;
  const keyInput = useRef();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const tabState = state?.currentTab || "info";
  const [currentTab, setCurrentTab] = useState(tabState);
  const [searchValue, setSearchValue] = useState("");
  const { infoUser } = useSelector((state) => state.userReducer);

  const { infoUserCourseRegister } = useSelector(
    (state) => state.courseReducer
  );

  let showModal = () => {
    setIsModalOpen(true);
  };

  let handleOk = () => {
    setIsModalOpen(false);
  };
  let handleCancel = () => {
    setIsModalOpen(false);
  };

  let totalPages = Math.ceil(infoUser?.chiTietKhoaHocGhiDanh?.length / 7);

  let fetchApi = () => {
    dispatch(getInfoUserThunk());
  };

  let renderModal = () => {
    return (
      <Modal
        styles={{ body: { padding: "35px" }, content: { padding: 0 } }}
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

  let handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let renderCourseRegister = () => {
    const start = (currentPage - 1) * 7;
    const end = start + 7;
    return infoUser?.chiTietKhoaHocGhiDanh
      ?.slice(start, end)
      ?.map((course, index) => {
        if (course?.tenKhoaHoc.includes(searchValue)) {
          return <CardHorizontal key={index} course={course} number={[7, 5]} />;
        }
      });
  };

  let handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    fetchApi();
  }, [infoUserCourseRegister]);

  useEffect(() => {
    setCurrentTab(tabState);
  }, [tabState]);

  return (
    <div>
      <Background
        path={[
          {
            href: pathname,
            title: <span className="text-blue-700">Thông tin nguời dùng</span>,
          },
        ]}
      />

      <div className="container mx-auto lg:p-12 py-12">
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
                <div className="grid grid-cols-2">
                  <div className="">
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
                className={`Course TabContent ${
                  currentTab === "course" ? "Active" : ""
                }`}
              >
                <section className="flex justify-between items-center bg-gray-300 mb-3 p-3">
                  <h6 className="font-bold text-xl">Khóa học của tôi</h6>
                  <div className="flex">
                    <input
                      ref={keyInput}
                      className="w-full text-black border border-solid border-slate-300 h-11 rounded-l-lg p-5 text-base focus:outline-none  bg-gray-100"
                      type="text"
                      placeholder="Tìm kiếm"
                      onChange={handleChangeSearch}
                    />
                    <div className="bg-blue-700 flex justify-center  w-2/3 rounded-r-lg">
                      <button
                        type="submit"
                        className="border-none flex items-center text-white  "
                      >
                        <i className="fa fa-search mr-2" />
                      </button>
                    </div>
                  </div>
                </section>

                <div className="grid grid-cols-1">{renderCourseRegister()}</div>
                <nav className="Pagination">
                  <ul className="flex justify-end">
                    {totalPages > 1 ? (
                      <ButtonPagination
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        totalPages={totalPages}
                      />
                    ) : (
                      ""
                    )}
                  </ul>
                </nav>
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
