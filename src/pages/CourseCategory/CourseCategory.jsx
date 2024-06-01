import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseCategoryListThunk } from "../../redux/courseReducer/courseThunk";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import CardVertical from "../../components/CardCustom/CardVertical/CardVertical";
import Background from "../../components/Background/Background";
import usePagination from "../../utils/pagination/usePagination";

const CourseCategory = () => {
  const { maDanhMuc } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = location.pathname;
  let { coursesCategoryList } = useSelector((state) => state.courseReducer);

  const {
    currentPage,
    totalPages,
    handlePageChange,
    paginatedItems: paginatedCourses,
    setCurrentPage
  } = usePagination(coursesCategoryList, 12);

  useEffect(() => {
    dispatch(getCourseCategoryListThunk(maDanhMuc));
    setCurrentPage(1)
  }, [maDanhMuc]);

  return (
    <div>
      <Background
        path={[
          { href: "", title: <span className="text-white">Danh mục khóa học</span> },
          {
            href: currentPath,
            title: <span className="text-blue-400">{maDanhMuc}</span>,
          },
        ]}
      />

      <div className="container mx-auto lg:px-12 py-12 px-3">
        <div className="ListCategory space-y-7">
          <div className="Title">
            <i className="fas fa-desktop"></i>
            <span className="ml-2">
              {coursesCategoryList.length
                ? coursesCategoryList[0].danhMucKhoaHoc?.tenDanhMucKhoaHoc
                : "Lập trình"}
            </span>
          </div>

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-11">
            {paginatedCourses.map((course, index) => (
              <CardVertical
                key={index}
                course={course}
                type={"register"}
              />
            ))}
          </div>

          <ButtonPagination
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
