import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseCategoryListThunk } from "../../redux/courseReducer/courseThunk";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import CardVertical from "../../components/CardCustom/CardVertical/CardVertical";
import Background from "../../components/Background/Background";

const CourseCategory = () => {
  const { maDanhMuc } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const currentPath = location.pathname;
  let [currentPage, setCurrentPage] = useState(1);
  let { coursesCategoryList } = useSelector((state) => state.courseReducer);
  const totalPages = Math.ceil(coursesCategoryList.length / 12);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let fetchApi = () => {
    dispatch(getCourseCategoryListThunk(maDanhMuc));
  };

  let renderCard = () => {
    let start = (currentPage - 1) * 12;
    let end = start + 12;
    return coursesCategoryList.slice(start, end).map((course, index) => {
      return (
        <CardVertical
          key={index}
          course={course}
          number={[7, 5]}
        />
      );
    });
  };

  useEffect(() => {
    fetchApi();
  }, [maDanhMuc]);

  return (
    <div>
      <Background
        path={
          [
            { href: '', title: <span >Danh mục khóa học</span> },
            { href: currentPath, title: <span className="text-blue-700" >{maDanhMuc}</span> },
          ]
        }
      />

      <div className="container mx-auto lg:p-12 py-12">
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
