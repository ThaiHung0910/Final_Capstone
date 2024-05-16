import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListCourseThunk } from "../../../redux/courseReducer/courseThunk";
import CardVertical from "../../../components/CardCustom/CardVertical/CardVertical";

const ListCourse = () => {
  const dispatch = useDispatch();
  const { coursesList } = useSelector((state) => state.courseReducer);

  let fetchApi = () => {
    dispatch(getListCourseThunk());
  };

  let renderCourseItem = (start, end) => {
    return coursesList?.slice(start, end).map((course, index) => {
      return <CardVertical key={index} course={course} number={[7, 5]} />;
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container mx-auto lg:px-12 my-7">
      <h1 className="TitleCourse my-4">
        <a href="/">Khóa học phổ biến</a>
      </h1>

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-11">
        {renderCourseItem(0, 4)}
      </div>

      <h1 className="TitleCourse my-4">
        <a href="/">Khóa học tham khảo</a>
      </h1>

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-11">
        {renderCourseItem(5, 9)}
      </div>
    </div>
  );
};

export default ListCourse;
