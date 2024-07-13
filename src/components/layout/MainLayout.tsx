import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import React from "react";

const { Content, Footer, Header } = Layout;
// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

// const items: MenuProps["items"] = [
//   {
//     key: "1",
//     label: "Dashboard",
//   },
//   {
//     key: "2",
//     label: "Profile",
//   },
//   {
//     key: "3",
//     label: "User Management",
//     children: [
//       {
//         key: "4",
//         label: "Create Admin",
//       },
//       {
//         key: "5",
//         label: "Create Student",
//       },
//     ],
//   },
// ];

export default function MainLayout() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
