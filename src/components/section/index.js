import React from "react";
import Column from "../columns";

export default function Section({ sections }) {
  const getSections = () => {
    return sections?.map(({ id, title, name, BackgroundImage, columns }) => {
      let numColumns = columns.length;
      return (
        <div
          key={id}
          // className="flex justify-center h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed bg-white"
          className={`bg-hero bg-no-repeat bg-cover bg-center bg-fixed bg-white items-center overflow-hidden ${
            title ? "" : "flex"
          }`}
          style={{
            backgroundImage: BackgroundImage
              ? `url(${BackgroundImage.url.replace("undefined", "cmsamaris")})`
              : "",
            minHeight: BackgroundImage ? "80vh" : "fit-content",
          }}
        >
          {title ? (
            <div className="container mx-auto xl:px-500p_x lg:px-96 md:px-80">
              <h1 className="pt-16 my-8 text-3xl lg:text-5xl font-bold text-head-500">
                {title}
              </h1>
            </div>
          ) : (
            ""
          )}

          {columns ? (
            <div className="container mx-auto">
              <div
                key={id}
                className={`grid xl:grid-cols-${numColumns} md:grid-cols-${numColumns} grid-cols-1 max-h-screen object-contain`}
              >
                <Column columns={columns} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    });
  };

  return <>{getSections()}</>;
}
