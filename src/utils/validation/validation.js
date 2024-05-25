import * as yup from 'yup';

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

const commonSchema = {
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
  hoTen: yup
    .string()
    .min(4, message[1])
    .max(16, `Họ tên ${message[5]}`)
    .matches(
      /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
      message[6]
    )
    .required(message[0]),
};

export const registerValidationSchema = yup.object().shape({
  ...commonSchema,
  soDt: yup
    .string()
    .matches(/^(?:\+?84|0)(\d{9,10})$/, message[4])
    .required(message[0]),
});

export const updateValidationSchema = yup.object().shape({
  ...commonSchema,
  soDT: yup
    .string()
    .matches(/^(?:\+?84|0)(\d{9,10})$/, message[4])
    .required(message[0]),
});