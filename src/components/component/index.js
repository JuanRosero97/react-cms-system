import React from "react";
import Button from "../../blocks/button";
import Text from "../../blocks/text";
import Card from "../../blocks/cards";
import Slider from "../../blocks/sliders";

export default function Componente({ componentes }) {
  //   console.log("🚀 ~ file: index.js:4 ~ Section ~ Component", componentes);

  const getBloques = (component) => {
    if (component.blockType === "text") return <Text props={component} />;
    else if (component.blockType === "button")
      return <Button props={component} />;
    else if (component.blockType === "card") return <Card props={component} />;
    else if (component.blockType === "sliderBlock")
      return <Slider props={component} />;
    else return <div key={component.id}>div</div>;
  };

  const getComponentes = () => {
    return componentes?.map((component) => {
      return (
        <div key={component.id} className="text-left my-6">
          {getBloques(component)}
        </div>
      );
    });
  };

  return getComponentes();
}
