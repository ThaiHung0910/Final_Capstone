import React from "react";
import { Popconfirm, message } from "antd";

const ConfirmAction = ({
  title,
  description,
  action,
  button,
  infoUser,
  requiredMessage,
}) => {
  const confirm = (e) => {
    if (infoUser) {
      action();
    } else {
      message.error(requiredMessage);
    }
  };
  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={confirm}
      okText="Đồng ý"
      cancelText="Hủy"
    >
      {button}
    </Popconfirm>
  );
};

export default ConfirmAction;
