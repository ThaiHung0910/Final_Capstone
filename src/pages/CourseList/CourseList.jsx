import React, { useEffect } from "react";
import Background from "../../components/Background/Background";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getListCourseThunk } from "../../redux/courseReducer/courseThunk";
import { useDispatch } from "react-redux";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import CardVertical from "../../components/CardCustom/CardVertical/CardVertical";
import usePagination from "../../utils/pagination/usePagination";


const CourseList = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  const { coursesList } = useSelector((state) => state.courseReducer);


  const {
    currentPage,
    totalPages,
    handlePageChange,
    paginatedItems: paginatedCourses,
  } = usePagination(coursesList, 12); 



  useEffect(() => {
    dispatch(getListCourseThunk());
  }, []);



  return (
    <div>
      <Background
        path={[
          {
            href: currentPath,
            title: <span className="text-blue-400">Danh sách khóa học</span>,
          },
        ]}
      />

      <div className="container mx-auto lg:px-12 py-12 px-3  space-y-7">
        <h6 className="text-xl font-bold">Danh sách khóa học</h6>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-11">
          {paginatedCourses.map((course, index) => (
            <CardVertical key={index} course={course} />
          ))}
        </div>

        <ButtonPagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default CourseList;
