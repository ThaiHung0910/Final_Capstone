import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { registerThunk } from "../../redux/userReducer/userThunk";
import { background, logo } from "../../assets/img/js/img";
import { useNavigate } from "react-router-dom";
import FormInputCustom from "../../components/Input/FormInputCustom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const message = [
    "Vui lòng điền thông tin",
    "Tối thiểu bốn ký tự",
    "Mật khẩu phải ít nhất 4 ký tự gồm chữ, số, in hoa và kí tự đặc biệt",
    "Email chưa đúng định dạng",
    "Vui lòng nhập đúng số điện thoại",
    "không được vượt 16 ký tự",
    "Chỉ nhập chữ",
    "Không được chứa khoảng trắng và kí tự đặc biệt",
  ];

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

    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .min(4, message[1])
        .max(16, `Tài khoản ${message[5]}`)
        .matches(/^[a-zA-Z0-9_]*$/, message[7])
        .required(message[0]),
      matKhau: yup
        .string()
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,
          message[2]
        )
        .required(message[0]),
      email: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, message[3])
        .required(message[0]),
      soDt: yup
        .string()
        .matches(/^(?:\+?84|0)(\d{9,10})$/, message[4])
        .required(message[0]),
      hoTen: yup
        .string()
        .min(4, message[1])
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          message[6]
        )
        .required(message[0]),
    }),
  });
  return (
    <div
      style={{ background: `url(${background[0]}) no-repeat center / 100%` }}
      className="relative w-screen h-screen"
    >
      
        <div onClick={() => {
          navigate("/");
        }} className="absolute  lg:top-5 lg:left-5 top-3 left-3 cursor-pointer lg:w-64 w-36">
          <img src={logo[0]} alt="" />
        </div>
      

      <div className="flex items-center justify-center w-full h-full mt-5 md:mt-0">
        <form
          onSubmit={formRegister.handleSubmit}
          className="flex justify-center md:w-1/2 w-4/5   bg-[rgba(0,0,0,.9)] z-10"
        >
          <div className="xl:w-2/3  md:w-full w-2/3 space-y-2 p-3">
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

            <div className=" text-right  xl:px-5 md:px-5 px-0 xl:text-base md:text-base text-xs text-[#acafb4]">
              Bạn đã có tài khoản?{" "}
              <span
                onClick={() => {
                  navigate("/auth/login");
                }}
                className="text-blue-400 hover:text-[#acafb4] font-medium cursor-pointer duration-150"
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
