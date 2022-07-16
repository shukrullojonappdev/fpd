import React from "react";
import "./Main.scss";

export default function Main({ children }: { children: any }) {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
}
