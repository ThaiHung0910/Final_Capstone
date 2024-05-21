import React, { useEffect, useRef} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import ScrollHeader from "../../Scroll/ScrollHeader";
import { logo } from "../../../assets/img/js/img";
import UserNavMobile from "./UserNavMobile/UserNavMobile";
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
    return <UserNavMobile infoUser={infoUser} coursesCate={coursesCate} />;
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
      <div className="container mx-auto flex justify-between items-center px-3">
        <NavLink to={"/"} >
          <img src={logo[0]} width={100} alt="" />
        </NavLink>
        <form onSubmit={handleSubmitSearchMobile} className="HeaderSearch w-3/5 flex">
          <input
            ref={keyInputMobile}
            className="w-full border border-solid border-[#f3f4f6] h-11 rounded-l-lg p-5 text-base focus:outline-none bg-[#f6f9fa]"
            type="text"
            placeholder="Tìm kiếm"
          />
          <button
            type="submit"
            className="BtnGlobal"
          >
            <SearchOutlined className="text-xl mr-1" />
          </button>
        </form>
        <div>{renderUserNavMobile()}</div>
      </div>
    </div>
  );
}
