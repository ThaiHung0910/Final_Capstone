import { useFormik } from "formik";
import React, { useEffect} from "react";
import * as yup from "yup";
import FormInputCustom from "../../../components/Input/FormInputCustom";
import { useDispatch } from "react-redux";
import { updateThunk } from "../../../redux/userReducer/userThunk";

const ModalContent = ({ setIsModalOpen, infoUser }) => {
  const dispatch = useDispatch();
  const message = [
    "Vui lòng điền thông tin",
    "Tối thiểu bốn ký tự",
    "Mật khẩu phải ít nhất 4 ký tự gồm chữ, số, in hoa và kí tự đặc biệt",
    "Email chưa đúng định dạng",
    "Vui lòng nhập đúng số điện thoại",
    "Chỉ nhập chữ",
  ];

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

    validationSchema: yup.object().shape({
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
      soDT: yup
        .string()
        .matches(/^(?:\+?84|0)(\d{9,10})$/, message[4])
        .required(message[0]),
      hoTen: yup
        .string()
        .min(4, message[1])
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          message[5]
        )
        .required(message[0]),
    }),
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
        className="flex flex-col items-center justify-center FormUpdate"
      >
        <h6 className="font-bold text-2xl text-white p-7">Chỉnh sửa thông tin cá nhân</h6>
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
