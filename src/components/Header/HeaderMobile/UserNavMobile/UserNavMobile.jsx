import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HistoryOutlined,
  MenuOutlined,
  LogoutOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  UnorderedListOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { Drawer } from "antd";
import { logOutAction } from "../../../../redux/userReducer/userSlice";
import { avatar, imageNotFound } from "../../../../assets/img/js/img";
import { getCourseCategoryAction } from "../../../../redux/courseReducer/courseSlice";
import { courseService } from "../../../../services/courseService";

export default function UserNavMobile({ infoUser }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const coursesCate = useSelector(
    (state) => state.courseReducer.coursesCategory
  );

  let fetchApi = async () => {
    try {
      let res = await courseService.getCourseCategory();
      dispatch(getCourseCategoryAction(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const renderCourseCategory = () => {
    return coursesCate.map((course, index) => {
      return (
        <li key={index}>
          <NavLink to={`/danhmuckhoahoc/${course.maDanhMuc}`}>
            {course.tenDanhMuc}
          </NavLink>
        </li>
      );
    });
  };

  const renderNav = (path, icon, name, components) => {
    return (
      <div
        onClick={() => {
          navigate(
            path,
            path === "/user" ? { state: { currentTab: "course" } } : ""
          );
        }}
        className="flex items-center space-x-2 py-3 px-2 mt-2 hover:bg-[#3A3B3C] transition rounded-lg cursor-pointer"
      >
        {icon}
        <span className="text-xl text-[#C6C7CC] ml-4">{name}</span>
        {components}
      </div>
    );
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="flex items-end space-x-5">
      <button
        className="text-2xl text-blue-700 hover:text-blue-800  font-bold "
        onClick={showDrawer}
      >
        <MenuOutlined />
      </button>
      <Drawer
        width={300}
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        styles={{ content: { backgroundColor: "#18191A" } }}
      >
        <div className="space-y-1 ">
          {infoUser ? (
            <div className="flex items-center space-x-4 py-3 px-2 hover:bg-[#3A3B3C]  transition rounded-lg">
              <img
                className="h-12 w-12  rounded-full"
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
                className="cursor-pointer"
              >
                <div className="pt-1 text-xl  text-[#C6C7CC]  font-bold">
                  {infoUser.hoTen}
                </div>
                <div className="text-[#ACAFB4]">Xem thông tin cá nhân</div>
              </div>
            </div>
          ) : (
            ""
          )}
          <hr className=" bg-gray-300" />
        </div>

        {infoUser
          ? renderNav(
              "/user",
              <HistoryOutlined className="p-2 leading-7 text-2xl  text-white text-center  bg-[#4E4F50] rounded-full" />,
              "Khóa học của tôi"
            )
          : renderNav(
              "/auth/login",
              <UserOutlined className="p-2 leading-7 text-2xl  text-white text-center  bg-[#4E4F50] rounded-full" />,
              "Đăng nhập"
            )}

        <div className="flex items-center space-x-2 py-3 px-2 mt-2 hover:bg-[#3A3B3C] transition rounded-lg cursor-pointer">
          <div className="menuHeader">
            <div className="CourseCategory">
              <UnorderedListOutlined className="p-2 leading-7 text-2xl  text-white text-center  bg-[#4E4F50] rounded-full" />{" "}
              <span className=" text-xl text-[#C6C7CC] ml-2">Danh mục khóa học</span>
              <ul className="CourseCategoryList">{renderCourseCategory()}</ul>
            </div>
          </div>
        </div>

        {renderNav(
          "/khoahoc",
          <DatabaseOutlined className="p-2 leading-7 text-2xl  text-white text-center  bg-[#4E4F50] rounded-full" />,
          "Danh sách khóa học"
        )}



        {infoUser ? (
          <div
            onClick={() => {
              dispatch(logOutAction());
            }}
            className="flex items-center space-x-2 py-3 px-2 mt-2 hover:bg-[#3A3B3C] transition rounded-lg cursor-pointer"
          >
            <LogoutOutlined className="p-2 leading-7 text-xl  text-white text-center  bg-[#4E4F50] rounded-full" />{" "}
            <span className=" text-lg text-[#C6C7CC] ">Đăng xuất</span>
          </div>
        ) : (
          renderNav(
            "/auth/register",
            <UsergroupAddOutlined className="p-2 leading-7 text-2xl  text-white text-center  bg-[#4E4F50] rounded-full" />,
            "Đăng ký"
          )
        )}
      </Drawer>
    </div>
  );
}
