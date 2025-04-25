import React, { useState } from "react";
import "./BaseIcon.scss";
import { ref } from "process";

export default function BaseIcon(props) {
  const [iconParams, setIconParams] = useState();
  const iconParamsChange = () => {
    setIconParams({
      "--size": props.size,
      "--rotate": props.rotate + "deg",
      "--svg": `url('/icons/${props.icon}.svg')`,
    });
  };

  return (
    <span
      aria-hidden="true"
      className={`base-icon bg-${props.color}`}
      style={iconParams}
    />
  );
}
