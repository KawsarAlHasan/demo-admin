// Sidebar.js
import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  TeamOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";

const sidebarItems = [
  {
    key: "1",
    icon: <AppstoreOutlined />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <BarChartOutlined />,
    label: "All Vendors",
  },
  {
    key: "3",
    icon: <CloudOutlined />,
    label: "All Users",
  },
  {
    key: "4",
    icon: <TeamOutlined />,
    label: "Products",
  },
  {
    key: "5",
    icon: <SettingOutlined />,
    label: "Settings",
  },
  {
    key: "6",
    icon: <BarChartOutlined />,
    label: "Analytics",
  },
  {
    key: "7",
    icon: <BarChartOutlined />,
    label: "Subcriptions",
  },
];

const Sidebar = ({ onClick }) => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={sidebarItems}
      onClick={onClick}
    />
  );
};

export default Sidebar;
