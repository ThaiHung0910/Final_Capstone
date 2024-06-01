import avatar1 from "../avatar/avatarUser.png";
import avatar2 from "../avatar/avatarTutor.png";
import avatar3 from "../avatar/avatarTutor1.png";
import imageDefault from "../imageDefault.jpg";
import auth from "../background/auth.jpg";
import modal from "../background/modal.png";
import student from "../number/student.png";
import hourglass from "../number/hourglass.png";
import teacherIcon from "../number/teacher.png";
import timetable from "../number/timetable.png";
import logoWeb from "../logo/logo.png";
import logoFooter from '../logo/logo_footer.png'
import teacher1 from "../teacher/teacher1.jpeg";
import teacher2 from "../teacher/teacher2.jpeg";
import teacher3 from "../teacher/teacher3.jpeg";
import teacher4 from "../teacher/teacher4.jpeg";
import post1 from "../about/1.jpeg";
import post2 from "../about/2.jpeg";
import post3 from "../about/3.jpg";
import avatar4 from "../about/avatar.png";
import avatar5 from "../about/avatar2.jpg";
import avatar6 from "../about/avatar3.jpg";
import lotr from "../comment/lotr.png";
import harrypotter from "../comment/harrypotter.jpg";
import denmark from "../comment/denmark.jpg";




export const logo = [logoWeb, logoFooter];

export const background = [auth, modal];

export const avatar = [avatar1, avatar2, avatar3];

export const imageNotFound = imageDefault;

export const numbers = [
  {
    image: student,
    number: "7777",
    name: "Học viên",
  },
  {
    image: hourglass,
    number: "1000",
    name: "Khóa học",
  },
  {
    image: timetable,
    number: "31000",
    name: "Giờ học",
  },
  {
    image: teacherIcon,
    number: "300",
    name: "Giảng viên",
  },
];

export const teachers = [
  {
    image: teacher1,
    name: "Harry",
    course: 7,
  },
  {
    image: teacher2,
    name: "Daniel",
    course: 5,
  },
  {
    image: teacher3,
    name: "Engelbert",
    course: 7,
  },
  {
    image: teacher4,
    name: "Aiden",
    course: 8,
  },
];

export const posts = [
  {
    image: post1,
    name: "Elearning - Hệ thống học hàng đầu",
    view: 177,
    date: "7-4-2024",
    author: "Harry",
  },
  {
    image: post2,
    name: "Elearning - Đào tạo lập trình chuyên sâu",
    view: 153,
    date: "6-4-2024",
    author: "Daniel",
  },
  {
    image: post3,
    name: "Elearning - Phương pháp đào tạo hiện đại",
    view: 99,
    date: "1-4-2024",
    author: "William",
  },
];

export const reviews = [
  {
    image: avatar4,
    name: "Carol",
    review: `Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập trình
    từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn được tinh
    chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập và
    giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn`,
  },
  {
    image: avatar5,
    name: "Emma",
    review:
      "Các khóa học ở đây cung cấp nền tảng vững chắc về lập trình. Bản thân mình đã học được rất nhiều từ các bài giảng chi tiết và các bài tập thực hành. Điều mình thích nhất là chương trình giảng dạy có sự kết hợp hài hòa giữa lý thuyết và thực hành",
  },
  {
    image: avatar6,
    name: "Lisa",
    review:
      "Đây là một trong những chương trình giảng dạy tốt nhất mà mình từng tham gia. Giảng viên rất có kinh nghiệm và nhiệt tình giảng dạy. Bản thân mình đã tiến bộ đáng kể trong lập trình và tự tin xin việc sau khi hoàn thành khóa học",
  },
];


export const avatarComment = [lotr, denmark, harrypotter];


