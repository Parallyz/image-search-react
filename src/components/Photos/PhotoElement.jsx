import React from "react";
import "../../style/img.css";
export function PhotoElement(props) {
  return (
    <div className="img__container">
      <img src={props.img.urls.full} alt={props.img.user.name} loading="lazy" />
    </div>
  );
}
