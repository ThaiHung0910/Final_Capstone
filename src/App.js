import "./App.css";
import "./css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Loading from "./components/Loading/Loading";
import AuthTemplate from "./templates/AuthTemplate/AuthTemplate";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import Page404 from "./pages/Page404/Page404";
import SearchPage from "./pages/SearchPage/SearchPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import UserPage from "./pages/UserPage/UserPage";
import CourseCategory from "./pages/CourseCategory/CourseCategory";
import CheckUser from "./HOC/CheckUser";
import CourseList from "./pages/CourseList/CourseList";

function App() {
  return (
    <BrowserRouter>
      <Loading />
      <Routes>
        
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="timkiem/:tuKhoa" element={<SearchPage />} />
          <Route path="chitiet/:maKhoaHoc" element={<DetailPage />} />
          <Route path="khoahoc" element={<CourseList />} />
          <Route
            path="danhmuckhoahoc/:maDanhMuc"
            element={<CourseCategory />}
          />
          <Route
            path="user"
            element={
              <CheckUser>
                <UserPage />
              </CheckUser>
            }
          />
        </Route>

        
        <Route path="auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
