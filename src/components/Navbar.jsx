import React, { useState } from "react";
import { Avatar, Menu, Dropdown, Button, Badge, Drawer } from "antd";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  HomeOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { signOutAdmin } from "../api/api";

const Navbar = ({ showDrawer }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleSignOut = () => {
    signOutAdmin();
  };

  // Menu items for the dropdown under the profile
  const profileMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        <span onClick={handleSignOut}>Logout</span>
      </Menu.Item>
    </Menu>
  );

  const headerItems = [
    {
      label: (
        <Badge count={1}>
          <BellOutlined
            style={{ fontSize: "24px", cursor: "pointer" }} // BellOutlined আইকনের সাইজ সেট করা হয়েছে
            onClick={() => setDrawerVisible(true)} // Drawer দেখানোর জন্য ক্লিক ইভেন্ট হ্যান্ডলার
          />
        </Badge>
      ),
    },
    {
      label: (
        <Dropdown overlay={profileMenu} trigger={["click", "hover"]}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-between w-full">
      {/* Logo on the left side */}
      <div className="logo">
        <Link to="/">
          <img
            src="https://crictoday.com/wp-content/uploads/2024/05/Shakib-a_d_d-1200x675.webp" // Replace with your logo URL
            alt="Logo"
            style={{ height: "40px" }}
          />
        </Link>
      </div>

      {/* Button for small screens */}
      <Button
        className="lg:hidden block"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      ></Button>

      {/* Menu items on the right side */}
      <Menu
        mode="horizontal"
        items={headerItems}
        className="hidden lg:flex justify-end flex-1 min-w-0"
      />

      {/* Drawer for notifications */}
      <Drawer
        title="Notifications"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
      >
        {/* এখানে আপনি নোটিফিকেশনের কন্টেন্ট যোগ করতে পারেন */}
        <p>No new notifications</p>
      </Drawer>
    </div>
  );
};

export default Navbar;
