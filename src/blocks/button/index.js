import React from "react";

export default function Button({ props }) {
  const getButton = () => {
    return (
      <button
        className="text-xs text-white py-3 px-7"
        style={{ backgroundColor: props.Color, borderRadius: props.Border }}
      >
        {props.Text}
      </button>
    );
  };
  return getButton();
}
