import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListCourseThunk } from "../../../redux/courseReducer/courseThunk";
import CardVertical from "../../../components/CardCustom/CardVertical/CardVertical";

const ListCourse = () => {
  const dispatch = useDispatch();
  const { coursesList } = useSelector((state) => state.courseReducer);

  let renderCourseItem = (start, end, isFavorite) => {
    return coursesList?.slice(start, end).map((course, index) => {
      return <CardVertical key={index} course={course} isFavorite={isFavorite} type={'register'}/>;
    });
  };

  useEffect(() => {
    dispatch(getListCourseThunk());
  }, []);

  return (
    <div className="container mx-auto lg:px-12 pb-7 px-3">
      <h1 className="TitleCourse my-4">
        <a href="/">Khóa học phổ biến</a>
      </h1>

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-11">
        {renderCourseItem(0, 4)}
      </div>

      <h1 className="TitleCourse my-4">
        <a href="/">Khóa học yêu thích</a>
      </h1>

      <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-11">
        {renderCourseItem(5, 9, true)}
      </div>
    </div>
  );
};

export default ListCourse;
