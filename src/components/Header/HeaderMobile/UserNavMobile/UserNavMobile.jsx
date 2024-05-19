import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { avatar, imageNotFound } from "../../../../assets/img/js/img";
import { getCourseCategoryAction } from "../../../../redux/courseReducer/courseSlice";
import { courseService } from "../../../../services/courseService";
import Drawer from "../../Drawer/DrawerCustom";

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
      return {
        key: index,
        label: (
          <NavLink to={`/danhmuckhoahoc/${course.maDanhMuc}`}>
            {course.tenDanhMuc}
          </NavLink>
        ),
      };
    });
  };

  const renderNav = (path, icon, name, components) => {
    return (
      <div
        onClick={() => {
          navigate(
            path
          );
        }}
        className="flex items-center space-x-2 py-3 px-2 mt-2 hover:text-blue-400 transition rounded-lg cursor-pointer"
      >
        {icon}
        <span className="text-xl ml-4">{name}</span>
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
        className="text-2xl text-white hover:text-blue-400  font-bold "
        onClick={showDrawer}
      >
        <MenuOutlined />
      </button>

      <Drawer
        onClose={onClose}
        open={open}
        avatar={avatar}
        imageNotFound={imageNotFound}
        navigate={navigate}
        infoUser={infoUser}
        renderCourseCategory={renderCourseCategory}
        renderNav={renderNav}
      />
    </div>
  );
}
