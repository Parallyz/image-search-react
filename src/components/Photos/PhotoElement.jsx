import React from "react";
import "../../style/img.css";
export function PhotoElement({img}) {
  return (
    <div className="img__container">
      <img src={img.urls.full} alt={img.user.name} loading="lazy" />
    </div>
  );
}
