import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseSearchListThunk } from "../../redux/courseReducer/courseThunk";
import Background from "../../components/Background/Background";
import ButtonPagination from "../../components/ButtonPagination/ButtonPagination";
import CardHorizontal from "../../components/CardCustom/CardHorizontal/CardHorizontal";
import CardVertical from "../../components/CardCustom/CardVertical/CardVertical";
import Comment from "./Comment/Comment";
import { Rate } from "antd";

const SearchPage = () => {
  let { tuKhoa } = useParams();
  let url = `/timkiem/${tuKhoa}`;
  const navigate = useNavigate();
  const keyInput = useRef(),
    itemResultSearch = useRef();
  const dispatch = useDispatch();
  const [currentType, setCurrentType] = useState("horizontal");
  const [currentPage, setCurrentPage] = useState(1);
  const { coursesSearchList } = useSelector((state) => state.courseReducer);

  let totalPages = Math.ceil(coursesSearchList.length / 12);
  let showSearchResult = () => {
    let length = coursesSearchList.length;
    let pageFirst = (currentPage - 1) * 12 + 1,
      pageLast =
        currentPage === totalPages ? length : (currentPage - 1) * 12 + 12;
    return `Hiển thị ${pageFirst} - ${pageLast} trong ${length} kết quả tìm thấy`;
  };

  let fetchApi = () => {
    dispatch(getCourseSearchListThunk(tuKhoa));
  };

  let renderCoursesListSearch = () => {
    if (coursesSearchList.length) {
      let start = (currentPage - 1) * 12;
      let end = start + 12;

      switch (currentType) {
        case "horizontal":
          return (
            <ul className="CourseList my-7">
              {coursesSearchList?.slice(start, end).map((course, index) => {
                return (
                  <CardHorizontal
                    key={index}
                    course={course}
                    number={[7, 5]}
                    type={"register"}
                  />
                );
              })}
            </ul>
          );
        default:
          return (
            <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11 my-7">
              {coursesSearchList?.slice(start, end).map((course, index) => {
                return (
                  <CardVertical key={index} course={course} number={[7, 5]} />
                );
              })}
            </div>
          );
      }
    } else {
      return (
        <p className="Error">
          Không tìm thấy khóa học nào phù hợp với từ khóa của bạn.
        </p>
      );
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (itemResultSearch.current) {
      itemResultSearch.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (keyInput.current.value !== "") {
      navigate(`/timkiem/${keyInput.current.value}`);
      keyInput.current.value = "";
    }
  };

  let handleChangeType = (type) => {
    setCurrentType(type);
  };

  useEffect(() => {
    fetchApi();
  }, [tuKhoa]);

  return (
    <div className="relative ">
      <Background
        path={[
          { href: url, title: <span className="text-blue-700">Tìm kiếm</span> },
        ]}
      />

      <div className="container mx-auto text-lg xl:p-10">
        <div className="flex xl:justify-between xl:flex-row  flex-col items-center">
          <div ref={itemResultSearch} className="xl:w-3/4">
            <div className="flex justify-between bg-gray-300 my-3 p-3 ">
              <div className="flex items-center">
                <div className="Type flex items-center">
                  <button
                    className={`mr-2 ${
                      currentType === "horizontal" ? "Active" : ""
                    }`}
                    onClick={() => {
                      handleChangeType("horizontal");
                    }}
                  >
                    <i className="fa-solid fa-list"></i>
                  </button>
                  <button
                    className={`${
                      currentType === "horizontal" ? "" : "Active"
                    }`}
                    onClick={() => {
                      handleChangeType("vertical");
                    }}
                  >
                    <i className="fa-solid fa-table-cells-large"></i>
                  </button>
                </div>
                <div className="course-index ml-3">
                  {coursesSearchList.length ? (
                    <span>{showSearchResult()}</span>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <form onSubmit={handleSubmitSearch} className="flex">
                <input
                  ref={keyInput}
                  className="w-full text-black border border-solid border-slate-300 h-11 rounded-l-lg p-5 text-base focus:outline-none  bg-gray-100"
                  type="text"
                  placeholder="Tìm kiếm"
                />
                <div className="bg-blue-700 flex justify-center  w-1/4 rounded-r-lg">
                  <button
                    type="submit"
                    className="border-none flex items-center text-white  "
                  >
                    <i className="fa fa-search mr-2" />
                  </button>
                </div>
              </form>
            </div>

            <div>
              {renderCoursesListSearch()}

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

          <div className="Comment">
            <div
              className=" font-bold text-center  xl:mt-20 mt-10 py-4 rounded shadow-lg border "
              style={{ width: "300px" }}
            >
              <div className="flex items-center justify-center">
                <h3 className="px-1 py-3 xl:text-lg">
                  Học viên Elearning nghĩ gì?
                </h3>
              </div>
              <div className="CommentImage"></div>
              <div>
                Đánh giá của học viên !!!
                <Rate disabled allowHalf defaultValue={5} />
                <p className="xl:mt-2 md:mt-2 mt-2">
                  {10 * 10}% học viên hài lòng với khóa học
                </p>
                <div className="xl:py-6 md:py-5 py-4">
                  <Comment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;