// components/layout/Layout.jsx
import React from "react";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-gray-100">
      <Cabecalho />
      <main className="flex-grow w-full pt-16 pb-12">{children}</main>
      <Rodape />
    </div>
  );
}
