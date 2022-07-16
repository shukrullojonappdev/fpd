import React from "react";
import "./Sidebar.scss";

export default function Sidebar({ children }: { children: any }) {
  return (
    <>
      <div className="sidebar">{children}</div>
    </>
  );
}
