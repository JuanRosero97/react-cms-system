import React from "react";

export default function Card({ props }) {
  const getCard = () => {
    return (
      <div className="max-w-sm overflow-hidden bg-white mx-auto">
        <img
          src={`${props.Image.url.replace("undefined", "cmsamaris")}`}
          alt="img"
          className="h-auto w-full"
        />
        <div className="">
          <p className="text-2xl my-3 text-head-500">{props.Title}</p>
          <p className="text-sm text-subtitle-500">{props.Subtitle}</p>
          <p className="text-sm mt-3 text-blue-400 underline">See more ›</p>
        </div>
      </div>
    );
  };

  return getCard();
}
