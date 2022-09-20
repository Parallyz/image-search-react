import React, { useEffect } from "react";
import { PhotoElement } from "./PhotoElement";

export function PhotoList({ list, isSearch }) {
  if (!isSearch) return;
  return (
    <>
      {!list?.length && isSearch ? (
        <div className="not__found">Not found</div>
      ) : (
        list?.map((item, index) => <PhotoElement key={index} img={item} />)
      )}
    </>
  );
}
