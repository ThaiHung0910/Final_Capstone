import React from "react";

const Introduction = () => {
  return (
    <div className="container mx-auto lg:px-12 py-7 px-3">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-5 text-white Introduction">
        <div className=" lg:row-span-2 ItemLarge">
          <h3>Khóa học</h3>
          <p>
            <span>Học qua dự án thực tế</span>, học đi đôi với hành, không lý
            thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví
            dụ nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong
            làm được ngay
          </p>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>Hơn 1000 bài tập và dự án thực tế</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>Công nghệ cập nhật mới nhất</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>Hình ảnh, ví dụ, bài giảng sinh động trực quan</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>Tư duy phân tích, giải quyết vấn đề trong dự án</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự
                án
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Cơ hội thực tập tại các công ty lớn như FPT, Microsoft
              </span>
            </li>
          </ul>
        </div>

        <div >
          <h3>Lộ trình phù hợp</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span> Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>Học, luyện tập code, kỹ thuật phân tích, soft skill</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Huấn luyện để phát triển năng lực và niềm đam mê lập trình
              </span>
            </li>
          </ul>
        </div>

        <div >
          <h3>Hệ thống học tập</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học
                viên
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>Thống kê lượt xem video, làm bài, điểm số theo chu kỳ</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Thống kê, so sánh khả năng học của các học viên cùng level để
                đưa ra mục tiêu học tập
              </span>
            </li>
          </ul>
        </div>

        <div >
          <h3>Giảng viên</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Tương tác cùng mentor và giảng viên qua phần thảo luận
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>Review code và đưa ra các nhận xét góp ý</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>Chấm điểm tương tác thảo luận giữa các học viên</span>
            </li>
          </ul>
        </div>

        <div >
          <h3>Chứng nhận</h3>
          <ul>
            <li>
              <i className="fas fa-check"></i>
              <span>Chấm bài và có thể vấn đáp trực tuyến để review</span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>
                Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc
                đáo
              </span>
            </li>
            <li>
              <i className="fas fa-check"></i>
              <span>Kết nối CV của bạn đến với các đối tác của Elearning</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
