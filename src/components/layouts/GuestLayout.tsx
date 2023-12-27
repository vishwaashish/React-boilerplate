// components/LoginLayout.tsx
import React from "react";

interface IGuestLayout {
  children: React.ReactNode;
}
const GuestLayout: React.FC<IGuestLayout> = ({ children }) => {
  return (
    <div>
      {/* Header for the login page (if needed) */}
      <header>{/* Your header content */}</header>

      {/* Body of the login page */}
      <main>{children}</main>
    </div>
  );
};

export default GuestLayout;
