import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const DropdownCustom = ({ title, items, isIcon }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a href="/" onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          {isIcon ? <DownOutlined /> : ''}
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownCustom;
