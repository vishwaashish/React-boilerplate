// components/AdminLayout.tsx
import React from "react";

interface IAdminLayout {
  children: React.ReactNode;
}
const AdminLayout: React.FC<IAdminLayout> = ({ children }) => {
  return (
    <div>
      {/* Header for the admin dashboard (if needed) */}
      <header>{/* Your header content */}</header>

      {/* Sidebar for the admin dashboard */}
      <aside>{/* Your sidebar content */}</aside>

      {/* Body of the admin dashboard */}
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
