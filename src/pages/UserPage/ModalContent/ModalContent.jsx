import { useFormik } from "formik";
import React, { useEffect} from "react";
import FormInputCustom from "../../../components/Input/FormInputCustom";
import { useDispatch } from "react-redux";
import { updateThunk } from "../../../redux/userReducer/userThunk";
import { updateValidationSchema } from "../../../utils/validation/validation";


const ModalContent = ({ setIsModalOpen, infoUser }) => {
  const dispatch = useDispatch();


  let formUpdate = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    onSubmit: (value) => {
      dispatch(updateThunk(value));
      setIsModalOpen(false);
    },

    validationSchema: updateValidationSchema
  });

  useEffect(() => {
    if (infoUser) {
      let { taiKhoan, matKhau, email, soDT, maNhom, maLoaiNguoiDung, hoTen } =
        infoUser;
      formUpdate.setValues({
        taiKhoan,
        matKhau,
        email,
        soDT,
        maNhom,
        maLoaiNguoiDung,
        hoTen,
      });
    }
  }, []);

  return (
    <div>
      <form
        onSubmit={formUpdate.handleSubmit}
        className="flex flex-col items-center justify-center FormUpdate space-y-3"
      >
        <h6 className="font-bold text-2xl text-white">Chỉnh sửa thông tin cá nhân</h6>
        <FormInputCustom
          disable={true}
          name="taiKhoan"
          label="Tài khoản"
          formikField={formUpdate}
        />

        <FormInputCustom
          name="matKhau"
          label="Mật khẩu"
          formikField={formUpdate}
        />

        <FormInputCustom name="email" label="Email" formikField={formUpdate} />

        <FormInputCustom
          name="soDT"
          label="Số điện thoại"
          formikField={formUpdate}
        />

        <FormInputCustom name="hoTen" label="Họ Tên" formikField={formUpdate} />
        <div className="flex items-center justify-center">
          <button type="submit" className=" BtnGlobal">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalContent;
