import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/userReducer/userThunk";
import { background, logo } from "../../assets/img/js/img";
import { useNavigate } from "react-router-dom";
import FormInputCustom from "../../components/Input/FormInputCustom";
import { registerValidationSchema } from "../../utils/validation/validation";



const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formRegister = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: "GP01",
      isRegister: true,
    },

    onSubmit: (value) => {
      formRegister.values.isRegister = true;
      let navigateCustom = () => {
        navigate("/auth/login");
      };
      dispatch(registerThunk({ value, navigateCustom }));
    },

    validationSchema: registerValidationSchema
  });
  return (
    <div
      style={{
        background: `url(${background[0]}) center / 150%`,
      }}
      className="relative w-screen h-screen"
    >
      <div
        onClick={() => {
          navigate("/");
        }}
        className="absolute  lg:top-5 lg:left-5 top-3 left-3 cursor-pointer lg:w-64 w-36"
      >
        <img src={logo[0]} alt="" />
      </div>

      <div className="flex items-center justify-center w-full h-full mt-5 md:mt-0">
        <form
          onSubmit={formRegister.handleSubmit}
          className="flex justify-center lg:w-1/2 sm:w-4/5 w-5/6   bg-black z-10"
        >
          <div className="xl:w-3/4 md:w-full sm:w-2/3 w-full md:space-y-2 sm:space-y-5 space-y-6 p-3">
            <h1 className="xl:text-4xl md:text-3xl text-2xl mb-4 text-white  font-sans">
              Đăng ký
            </h1>

            <FormInputCustom
              name="taiKhoan"
              label="Tài khoản"
              formikField={formRegister}
            />

            <FormInputCustom
              name="matKhau"
              label="Mật khẩu"
              formikField={formRegister}
              type="password"
            />

            <FormInputCustom
              name="email"
              label="Email"
              formikField={formRegister}
            />

            <FormInputCustom
              name="soDt"
              label="Số điện thoại"
              formikField={formRegister}
            />

            <FormInputCustom
              name="hoTen"
              label="Họ Tên"
              formikField={formRegister}
            />

            <FormInputCustom name="maNhom" formikField={formRegister} />

            <button
              type="submit"
              className=" xl:w-full md:w-full w-full  xl:text-lg md:text-lg text-lg   xl:px-4 md:px-4 px-3 xl:py-4 md:py-4 py-2 BtnGlobal"
            >
              Đăng ký
            </button>

            <div className=" text-right  xl:px-5 md:px-5 px-0 xl:text-base md:text-base text-xs text-[#c6c7cc]">
              Bạn đã có tài khoản?{" "}
              <span
                onClick={() => {
                  navigate("/auth/login");
                }}
                className="text-blue-400 hover:text-white font-medium cursor-pointer duration-150"
              >
                Đăng nhập
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
