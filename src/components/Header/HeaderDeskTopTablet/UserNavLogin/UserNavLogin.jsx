import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  HistoryOutlined,
  MenuOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Drawer } from "antd";
import { logOutAction } from "../../../../redux/userReducer/userSlice";
import { avatar, imageNotFound } from "../../../../assets/img/js/img";

export default function UserNavLogin({ infoUser }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center space-x-5">
      <div
        onClick={() => {
          navigate("/user");
        }}
        className=" flex items-end space-x-3  text-white cursor-pointer"
      >
        <img
          className=" h-9 w-9 text-xl  bg-[#f6f9fa] rounded-full"
          src={avatar[0]}
          onError={(e) => {
            e.target.src = imageNotFound;
          }}
          alt=""
        />
        <span className="text-lg relative" style={{bottom: '1px'}}>{infoUser.hoTen}</span>
      </div>

      <button
        className="text-2xl  pb-1 text-blue-600 hover:text-blue-300  font-bold relative top-1"
        onClick={showDrawer}
      >
        <MenuOutlined />
      </button>

      <Drawer
        size="default"
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        style={{ backgroundColor: "#f6f9fa" }}
      >
        
        <div className="space-y-1 ">
          <div className="flex items-center space-x-4 py-3 px-2 transition rounded-lg">
            <img
              className="h-12 w-12  rounded-full"
              src={avatar[0]}
              onError={(e) => {
                e.target.src = imageNotFound;
              }}
              alt=""
            />
            <div
              onClick={() => {
                navigate("/user");
              }}
              className="cursor-pointer"
            >
              <div className="pt-1 text-xl    font-bold">
                {infoUser.hoTen}
              </div>
              <div>Xem thông tin cá nhân</div>
            </div>
          </div>
          <hr className=" bg-[rgb(243, 244, 246)]" />
        </div>
        
        <div
          onClick={() => {
            navigate("/user", { state: { currentTab: "course" } });
          }}
          className="flex items-center space-x-2 py-3 px-2 mt-2 transition rounded-lg cursor-pointer"
        >
          <HistoryOutlined className="p-2 leading-7 text-xl  text-white text-center  bg-[#acafb4] rounded-full" />{" "}
          <span className=" text-lg">Khóa học của tôi</span>
        </div>
        
        <div
          onClick={() => {
            dispatch(logOutAction());
          }}
          className="flex items-center space-x-2 py-3 px-2 mt-2 transition rounded-lg cursor-pointer"
        >
          <LogoutOutlined className="p-2 leading-7 text-xl  text-white text-center  bg-[#acafb4] rounded-full" />{" "}
          <span className=" text-lg">Đăng xuất</span>
        </div>
      </Drawer>
    </div>
  );
}
