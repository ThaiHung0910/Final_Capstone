import {
  HistoryOutlined,
  LogoutOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { Drawer } from "antd";
import { logOutAction } from "../../../redux/userReducer/userSlice";
import Dropdown from "../../../components/Dropdown/DropdownCustom";
import { ResponsiveSmallScreen } from "../../../HOC/responsive";

const DrawerCustom = ({
  onClose,
  open,
  avatar,
  imageNotFound,
  navigate,
  infoUser,
  renderCourseCategory = () => {},
  renderNav = () => {},
}) => {
  const dispatch = useDispatch();
  return (
    <Drawer
      width={300}
      placement="left"
      closable={false}
      onClose={onClose}
      open={open}
      styles={{
        body: {
          background: `url(https://cdn.dribbble.com/userupload/13189969/file/original-b3eec01caf3363129ac05151f3886304.jpeg?resize=752x) no-repeat center / cover`,
          color: "white",
        },
      }}
    >
      <div className="space-y-1">
        {infoUser && (
          <div className="flex items-center space-x-4 py-3 px-2 transition rounded-lg">
            <img
              className="h-12 w-12 rounded-full"
              src={avatar[0]}
              onError={(e) => {
                e.target.src = imageNotFound;
              }}
              alt=""
            />
            <div
              onClick={() => {
                navigate("/user");
              }}
              className="cursor-pointer hover:text-blue-400 duration-200"
            >
              <div className="pt-1 text-xl  font-bold">{infoUser.hoTen}</div>
              <div className="">Xem thông tin cá nhân</div>
            </div>
          </div>
        )}
        <hr className="bg-[#acafb4]" />
      </div>

      {infoUser ? (
        <div
          onClick={() => {
            navigate("/user", { state: { currentTab: "course" } });
          }}
          className="flex items-center space-x-2 py-3 px-2 mt-2 transition rounded-lg cursor-pointer hover:text-blue-400 duration-200"
        >
          <HistoryOutlined className="p-2 leading-7 text-2xl  text-white text-center  bg-[#acafb4] rounded-full" />{" "}
          <span className="sm:text-xl text-base">Khóa học của tôi</span>
        </div>
      ) : (
        <ResponsiveSmallScreen>
          {renderNav(
            "/auth/login",
            <UserOutlined className="p-2 leading-7 text-2xl text-white text-center bg-[#acafb4] rounded-full" />,
            <span className="sm:text-xl text-base">Đăng nhập</span>
          )}
        </ResponsiveSmallScreen>
      )}

      <ResponsiveSmallScreen>
        <div className="flex items-center space-x-2 py-3 px-2 mt-2 transition rounded-lg cursor-pointer">
          <div className=" w-full">
            <UnorderedListOutlined className="p-2 leading-7 text-2xl text-white text-center bg-[#acafb4] rounded-full" />{" "}
            <Dropdown
              title={
                <span className="sm:text-xl text-base hover:text-blue-400 text-white relative right-1  ml-2">
                  Danh mục khóa học
                </span>
              }
              items={renderCourseCategory()}
            />
          </div>
        </div>
        {renderNav(
          "/khoahoc",
          <DatabaseOutlined className="p-2 leading-7 text-2xl text-white text-center bg-[#acafb4] rounded-full" />,
          <span className="sm:text-xl text-base" >Danh sách khóa học</span>
        )}
      </ResponsiveSmallScreen>

      {infoUser ? (
        <div
          onClick={() => {
            dispatch(logOutAction());
          }}
          className="flex items-center space-x-2 py-3 px-2 mt-2 transition rounded-lg cursor-pointer hover:text-blue-400 duration-200"
        >
          <LogoutOutlined className="p-2 leading-7 text-2xl  text-white text-center  bg-[#acafb4] rounded-full" />{" "}
          <span className="sm:text-xl text-base">Đăng xuất</span>
        </div>
      ) : (
        renderNav(
          "/auth/register",
          <UsergroupAddOutlined className="p-2 leading-7 text-2xl  text-white text-center  bg-[#acafb4] rounded-full " />,
          <span className="sm:text-xl text-base">Đăng ký</span>
        )
      )}
    </Drawer>
  );
};

export default DrawerCustom;
