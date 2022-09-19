import React from "react";
import { PhotoElement } from "./PhotoElement";

export function PhotoList({ list }) {
  return (
    <>
      {list?.map((item) => (
        <PhotoElement key={item.id} {...item} />
      ))}
    </>
  );
}
