import React from "react";
import '../../style/img.css';
export function Img(params) {
  return (
    <div className="img__container">
      
        <img src={params.urls.full} alt="img" />
    
    </div>
  );
}
