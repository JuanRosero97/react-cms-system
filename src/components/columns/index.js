import React from "react";
import Componente from "../component";

export default function Column({ columns }) {
  const getColumns = () => {
    return columns?.map(({ id, Component }) => {
      return (
        <div
          key={id}
          className={`p-2 sm:p-8 ${
            columns.length === 1 ? "flex justify-center" : ""
          }`}
        >
          <Componente componentes={Component} />
        </div>
      );
    });
  };

  return getColumns();
}
