// components/layout/Layout.jsx
import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />
      <main className="flex-grow">{children}</main>
      <Rodape />
    </div>
  );
}
