import React, { useEffect, useState } from "react";
import Background from "../../components/Background/Background";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getListCourseThunk } from "../../redux/courseReducer/courseThunk";
import { useDispatch } from "react-redux";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import CardVertical from "../../components/CardCustom/CardVertical/CardVertical";

const CourseList = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { coursesList } = useSelector((state) => state.courseReducer);
  const totalPage = Math.ceil(coursesList.length / 12);

  let handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let renderCoursesList = () => {
    let start = (currentPage - 1) * 12;
    let end = start + 12;
    return coursesList.slice(start, end).map((course, index) => {
      return <CardVertical key={index} course={course} number={[7, 5]} />;
    });
  };

  let fetchApi = () => {
    dispatch(getListCourseThunk());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <Background
        path={
          [{
            href: currentPath,
            title: <span className="text-blue-700">Danh sách khóa học</span>
          }]
        }
      />

      <div className="container mx-auto p-12 space-y-7">
        <h6 className="text-xl font-bold">Danh sách khóa học</h6>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-11">
          {renderCoursesList()}
        </div>

        <nav className="Pagination">
          <ul className="flex justify-end">
            {coursesList.length > 1 ? (
              <ButtonPagination
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                totalPages={totalPage}
              />
            ) : (
              ""
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CourseList;
