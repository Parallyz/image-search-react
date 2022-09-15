import React from "react";
import '../../style/img.css';
export function Img(props) {
  return (
    <div className="img__container">
      <img src={props.urls.full} alt={props.user.name} loading="lazy" />
    </div>
  );
}
