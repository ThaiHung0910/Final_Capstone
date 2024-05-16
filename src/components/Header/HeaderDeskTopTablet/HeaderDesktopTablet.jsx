import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ScrollHeader from "../../Scroll/ScrollHeader";
import { courseService } from "../../../services/courseService";
import UserNavLogin from "./UserNavLogin/UserNavLogin";
import UserNavLogOut from "./UserNavLogOut/UserNavLogOut";
import { SearchOutlined } from "@ant-design/icons";
import { getCourseCategoryAction } from "../../../redux/courseReducer/courseSlice";
import { logo } from "../../../assets/img/js/img";

const HeaderDesktopTablet = () => {
  const scrollDirection = ScrollHeader();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const keyInput = useRef(null);
  const [searchVisible, setSearchVisible] = useState(false);
  const { infoUser } = useSelector((state) => state.userReducer);
  const coursesCate = useSelector(
    (state) => state.courseReducer.coursesCategory
  );

  let renderUserNavDesktop = () => {
    if (infoUser) {
      return <UserNavLogin infoUser={infoUser} />;
    } else {
      return <UserNavLogOut />;
    }
  };

  let fetchApi = async () => {
    try {
      let res = await courseService.getCourseCategory();
      dispatch(getCourseCategoryAction(res.data));
    } catch (err) {
      console.log(err);
    }
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

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (keyInput.current.value !== "") {
      navigate(`/timkiem/${keyInput.current.value}`);
      keyInput.current.value = "";
      setSearchVisible(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-top-28" : "top-0"
      } py-2  z-30 shadow-md text-white Header`}
    >
      <div className="Content lg:container lg:mx-auto flex justify-between items-center lg:px-12">
        <NavLink to={"/"} className="text-3xl font-extrabold">
          <img src={logo[0]} width={100} alt="" />
        </NavLink>

        <div className="flex">
          <ul className="MenuHeader">
            <li className="CourseCategory">
              <i className="fas fa-bars mr-1"></i>
              <NavLink to="/">Danh mục khóa học</NavLink>
              <ul className="CourseCategoryList">{renderCourseCategory()}</ul>
            </li>

            <li>
              <NavLink to="/khoahoc">Danh sách khóa học</NavLink>
            </li>

            <li>
              <button
                className="text-xl"
                onClick={() => {
                  setSearchVisible(!searchVisible);
                }}
              >
                <SearchOutlined />
              </button>
            </li>
          </ul>
        </div>
        {renderUserNavDesktop()}
      </div>

      {searchVisible && (
        <form
          onSubmit={handleSubmitSearch}
          className="HeaderSearch lg:px-12 lg:container lg:mx-auto flex mt-3"
        >
          <input
            ref={keyInput}
            className="w-full text-black h-11 rounded-l-lg p-5 text-base focus:outline-none"
            type="text"
            placeholder="Tìm kiếm"
          />
          <button
            type="submit"
            className="flex items-center BtnGlobal"
          >
            <SearchOutlined className="text-xl mr-1" />
          </button>
        </form>
      )}
    </div>
  );
};

export default HeaderDesktopTablet;
