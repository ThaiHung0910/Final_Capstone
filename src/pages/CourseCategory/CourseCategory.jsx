import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseCategoryListThunk } from "../../redux/courseReducer/courseThunk";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import CardVertical from "../../components/CardCustom/CardVertical/CardVertical";
import Background from "../../components/Background/Background";
import {
  setCurrentPage,
  setTotalPages,
} from "../../redux/paginationReducer/paginationSlice";

const CourseCategory = () => {
  const { maDanhMuc } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = location.pathname;
  let { coursesCategoryList } = useSelector((state) => state.courseReducer);
  const { currentPage, totalPages, itemsPerPage } = useSelector(
    (state) => state.paginationReducer
  );

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  let renderCard = () => {
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    return coursesCategoryList.slice(start, end).map((course, index) => {
      return <CardVertical key={index} course={course} number={[7, 5]} />;
    });
  };

  useEffect(() => {
    dispatch(getCourseCategoryListThunk(maDanhMuc));
  }, [maDanhMuc]);

  useEffect(() => {
    dispatch(setTotalPages((Math.ceil(coursesCategoryList.length / itemsPerPage))))
  }, [coursesCategoryList, itemsPerPage])

  return (
    <div>
      <Background
        path={[
          { href: "", title: <span>Danh mục khóa học</span> },
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
            {renderCard()}
          </div>

          <nav className="Pagination">
            <ul className="flex justify-end">
              {totalPages > 1 ? (
                <ButtonPagination
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                  totalPages={totalPages}
                />
              ) : (
                ""
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
