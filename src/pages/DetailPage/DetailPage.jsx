import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Background from "../../components/Background/Background";
import { courseService } from "../../services/courseService";
import {
  getListCourseThunk,
  registerCourseThunk,
} from "../../redux/courseReducer/courseThunk";
import { useDispatch, useSelector } from "react-redux";
import { getCourseDetailAction } from "../../redux/courseReducer/courseSlice";
import { avatar, imageNotFound } from "../../assets/img/js/img";
import CardVertical from "../../components/CardCustom/CardVertical/CardVertical";
import { Rate, message } from "antd";

const DetailPage = () => {
  const { maKhoaHoc } = useParams();
  const dispatch = useDispatch();
  const { coursesList, courseDetail } = useSelector(
    (state) => state.courseReducer
  );
  const { infoUser } = useSelector((state) => state.userReducer);

  const numberStudent = courseDetail.soLuongHocVien
    ? courseDetail.soLuongHocVien
    : 7;

  let fetchApi = async () => {
    try {
      let res = await courseService.getCourseDetail(maKhoaHoc);
      dispatch(getListCourseThunk());
      dispatch(getCourseDetailAction(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  let renderCourseRelated = () => {
    return coursesList.slice(0, 4).map((course, index) => {
      return <CardVertical key={index} course={course} type={"register"} />;
    });
  };

  let renderLengthVideo = () => {
    let randomLength = `${Math.round(Math.random() * 1)}${Math.round(
      Math.random() * 5
    )}:${Math.round(Math.random() * 5)}${Math.round(Math.random() * 9)}`;
    for (let number in randomLength) {
      if (Number(randomLength[0]) === 0 && Number(randomLength[1]) === 0) {
        randomLength = "07:17";
        break;
      }
    }
    return randomLength;
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <section className="DetailCourse">
      <Background
        path={[
          {
            href: `/chitiet/${maKhoaHoc}`,
            title: <span className="text-blue-400">Chi tiết</span>,
          },
        ]}
      />

      <div className="container mx-auto lg:px-12 px-3">
        <h1 className="text-3xl font-bold  py-5">Thông tin khóa học</h1>

        <div className="">
          <div className="lg:flex grid grid-cols-1 gap-2">
            <div className="lg:w-2/3 space-y-5">
              <h1 className="text-xl font-bold ">
                {courseDetail.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
              </h1>

              <ul className="md:flex md:flex-row grid grid-cols-2 gap-4">
                <li className="md:mr-7 md:pr-7 md:border-[#f3f4f6]  md:border-r-2">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <img alt="" src={avatar[2]} height={50} width={50} />
                    </div>
                    <div>
                      <label>Giáo viên</label>
                      <h3 className="font-bold">
                        {courseDetail.nguoiTao?.hoTen
                          ? courseDetail.nguoiTao?.hoTen
                          : "Harry"}
                      </h3>
                    </div>
                  </div>
                </li>
                <li className="md:mr-7 md:pr-7 md:border-[#f3f4f6] md:border-r-2">
                  <div className="flex flex-col items-center h-full justify-center">
                    <label >Học viên</label>
                    <p className="font-bold">{numberStudent}</p>
                  </div>
                </li>
                <li className="md:w-2/5 col-span-2">
                  <div className="flex flex-col md:items-center h-full md:justify-center">
                    <div className="w-full ml-2">
                      <h3>Đánh giá</h3>
                    </div>
                    <div className="flex w-full ml-2">
                      <Rate disabled allowHalf defaultValue={5} />
                      <span className="ml-1">(7 đánh giá)</span>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="space-y-5">
                <p>
                  React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
                  dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng
                  hiện đại, phản ứng cho web. {courseDetail.moTa}
                </p>

                <div className="space-y-5">
                  <h6 className="text-xl font-bold">Những gì bạn sẽ học</h6>
                  <div className="grid grid-cols-2">
                    <div className="pr-2">
                      <ul className="space-y-3">
                        <li>
                          <i className="fas fa-check text-blue-400"></i>
                          <span className="ml-2">
                            Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                            thiện với người dùng và phản ứng nhanh
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check text-blue-400"></i>
                          <span className="ml-2">
                            Đăng ký công việc được trả lương cao hoặc làm
                            freelancer trong một trong những lĩnh vực được yêu
                            cầu nhiều nhất mà bạn có thể tìm thấy trong web dev
                            ngay bây giờ
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check text-blue-400"></i>
                          <span className="ml-2">
                            Cung cấp trải nghiệm người dùng tuyệt vời bằng cách
                            tận dụng sức mạnh của JavaScript một cách dễ dàng
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check text-blue-400"></i>
                          <span className="ml-2">
                            Tìm hiểu tất cả về React Hooks và React Components
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="pl-2">
                      <ul className="space-y-3">
                        <li>
                          <i className="fas fa-check text-blue-400"></i>
                          <span className="ml-2">
                            Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú
                            pháp Javascript NPM, Webpack, Babel và ES6 / ES2015
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check text-blue-400"></i>
                          <span className="ml-2">
                            Nhận ra sức mạnh của việc xây dựng các thành phần có
                            thể kết hợp
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check text-blue-400"></i>
                          <span className="ml-2">
                            Hãy là kỹ sư giải thích cách hoạt động của Redux cho
                            mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ
                            bản
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check text-blue-400"></i>
                          <span className="ml-2">
                            Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc
                            các ứng dụng Redux
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <h6 className="text-3xl font-bold uppercase">
                    Nội dung khóa học
                  </h6>

                  <div className="space-y-3">
                    <div className="SectionCourse">
                      <span>Mục 1: Giới thiệu</span>
                      <button className="BtnGlobal">Xem trước</button>
                    </div>
                    <p className="text-xl font-bold">Bài học</p>
                    <div className="space-y-3">
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>Các khái niệm về
                          React Component
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>Thiết lập môi
                          trường cho Windows
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>Tạo ứng dụng
                          React - React-Scripts
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>Ghi chú nhanh về
                          dấu ngoặc kép cho string interpolation
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="SectionCourse">
                      <span>Mục 2: Kiến thức căn bản</span>
                      <button className="BtnGlobal">Xem trước</button>
                    </div>
                    <p className="text-xl font-bold">Bài học</p>
                    <div className="space-y-3">
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>Trang chủ và
                          thành phần thư mục
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>Hướng dẫn khóa
                          học + Liên kết Github
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>Trang chủ thương
                          mại điện tử + thiết lập SASS
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>
                          Tệp CSS và SCSS
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>
                          React 17: Cập nhật các gói + Phiên bản React mới nhất
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="SectionCourse ">
                      <span>Mục 3: Kiến thức chuyên sâu</span>
                      <button className="BtnGlobal">Xem trước</button>
                    </div>
                    <p className="text-xl font-bold">Bài học</p>
                    <div className="space-y-3">
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>connect() and
                          mapStateToProps
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info">
                        <span>
                          <i className="fas fa-play-circle"></i>
                          Trạng thái thư mục vào Redux
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                      <div className="Info mt-1">
                        <span>
                          <i className="fas fa-play-circle"></i>
                          Thành phần Tổng quan về Bộ sưu tập
                        </span>
                        <span>
                          <i className="fas fa-clock"></i>
                          {renderLengthVideo()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="SideBarCourseDetail ">
                <img
                  src={courseDetail.hinhAnh}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = imageNotFound;
                  }}
                  alt=""
                />
                <div className="text-right py-7">
                  <p className="font-bold text-2xl">
                    <i className="fas fa-bolt text-blue-400 mr-2"></i>500.000
                    <sup>đ</sup>
                  </p>
                </div>

                <button
                  className="BtnGlobal"
                  onClick={() => {
                    infoUser
                      ? dispatch(
                          registerCourseThunk({
                            maKhoaHoc: courseDetail.maKhoaHoc,
                            taiKhoan: infoUser.taiKhoan,
                          })
                        )
                      : message.error(
                          "Vui lòng đăng nhập để đăng ký khóa học này"
                        );
                  }}
                >
                  Đăng ký
                </button>

                <div className="Content">
                  <ul>
                    <li>
                      <p>
                        Ghi danh:
                        <span> {numberStudent} học viên</span>
                      </p>
                      <i className="fas fa-user-graduate "></i>
                    </li>
                    <li>
                      <p>
                        Thời gian: <span> 18 giờ</span>
                      </p>
                      <i className="far fa-clock far fa-calendar-alt"></i>
                    </li>
                    <li>
                      <p>
                        Bài học: <span>10</span>
                      </p>
                      <i className="fas fa-book"></i>
                    </li>
                    <li>
                      <p>
                        Video:<span> 14</span>
                      </p>
                      <i className="fas fa-photo-video"></i>
                    </li>
                    <li>
                      <p>
                        Trình độ:<span> Người mới bắt đầu</span>
                      </p>
                      <i className="fas fa-database"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="my-11">
            <h6 className="text-xl font-bold">Khóa học tham khảo</h6>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-11 my-7">
              {renderCourseRelated()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
