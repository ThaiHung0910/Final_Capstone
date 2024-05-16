import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import ScrollHeader from "../../Scroll/ScrollHeader";
import { logo } from "../../../assets/img/js/img";
import UserNavLoginMobile from "./UserNavMobile/UserNavMobile";
import { getCourseCategoryAction } from "../../../redux/courseReducer/courseSlice";
import { courseService } from "../../../services/courseService";

export default function HeaderMobile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let keyInputMobile = useRef(null);
  const scrollDirection = ScrollHeader();
  const { infoUser } = useSelector((state) => state.userReducer);
  const coursesCate = useSelector(
    (state) => state.courseReducer.coursesCategory
  );

  let renderUserNavMobile = () => {
    return <UserNavLoginMobile infoUser={infoUser} coursesCate={coursesCate} />;
  };

  let fetchApi = async () => {
    try {
      let res = await courseService.getCourseCategory();
      dispatch(getCourseCategoryAction(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitSearchMobile = (e) => {
    e.preventDefault();
    if (keyInputMobile.current.value !== "") {
      navigate(`/timkiem/${keyInputMobile.current.value}`);
      keyInputMobile.current.value = "";
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div
      className={`sticky ${
        scrollDirection === "down" ? "-top-28" : "top-0"
      } py-2 z-30 shadow-md Header`}
    >
      <div className="container mx-auto grid grid-cols-4 gap-2 items-center  pr-10 pl-5">
        <NavLink to={"/"} className="text-3xl font-extrabold">
          <img src={logo[0]} width={100} alt="" />
        </NavLink>
        <form onSubmit={handleSubmitSearchMobile} className="col-span-2 flex">
          <input
            ref={keyInputMobile}
            className="w-full border border-solid border-slate-300 h-11 rounded-l-lg p-5 text-base focus:outline-none focus:ring bg-gray-100"
            type="text"
            placeholder="Tìm kiếm"
          />
          <button
            type="submit"
            className="border-none flex items-center text-white bg-blue-700 rounded-r-lg"
            style={{ padding: "0 30px" }}
          >
            <SearchOutlined className="text-xl mr-1" />
          </button>
        </form>
        <div className="mx-auto">{renderUserNavMobile()}</div>
      </div>
    </div>
  );
}
