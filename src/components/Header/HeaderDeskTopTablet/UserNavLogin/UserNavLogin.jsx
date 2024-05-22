import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { avatar, imageNotFound } from "../../../../assets/img/js/img";
import Drawer from '../../Drawer/DrawerCustom'

export default function UserNavLogin({ infoUser }) {
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
        className=" flex items-end space-x-3 text-white cursor-pointer"
      >
        <img
          className=" h-9 w-9 text-xl rounded-full"
          src={avatar[0]}
          onError={(e) => {
            e.target.src = imageNotFound;
          }}
          alt=""
        />
        <span className="text-lg relative">
          {infoUser.hoTen}
        </span>
      </div>

      <button
        className="text-2xl  pb-1  hover:text-blue-400 font-bold relative top-1 duration-200"
        onClick={showDrawer}
      >
        <MenuOutlined />
      </button>

      <Drawer
        onClose={onClose}
        open={open}
        avatar={avatar}
        imageNotFound={imageNotFound}
        navigate={navigate}
        infoUser={infoUser}
      />
    </div>
  );
}
