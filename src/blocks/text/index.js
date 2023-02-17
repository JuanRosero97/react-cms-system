import React from "react";

export default function Text({ props }) {
  const getTexto = () => {
    return <span className={`${props.Size}`}>{props.Text}</span>;
  };

  return getTexto();
}
