import React from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";

export default function UserNavLogOut() {
  let navigate = useNavigate();

  return (
    <div className="space-x-4 ContentRight">
      <button
        onClick={() => {
          navigate('/auth/login')
        }}
        className="BtnGlobal"
      >
        <span className="flex items-center space-x-1">
          <UserOutlined /> <span className="font-bold ">Đăng nhập</span>
        </span>
      </button>
      <button
        onClick={() => {
          navigate('/auth/register')
        }}
        className="BtnGlobal"
      >
        <span className="flex items-center space-x-1">
          <UserAddOutlined /> <span className="font-bold ">Đăng ký</span>
        </span>
      </button>
    </div>
  );
}
