import React from "react";

import { useContext } from "react";
import { ApplicationContext } from "../../context/context.jsx";


import "../../style/search.css";
import { ImgList } from "../Photos/Photos.jsx";

export function Search() {
  const { search, Setsearch } = useContext(ApplicationContext);



 

  return (
    <>
      <div className="container">
        <div className="container__input">
          <h2>Search</h2>
          <input
            className="input input-search"
            type="text"
            value={search}
            onChange={(e) => Setsearch(e.target.value)}
          />
        </div>
        
        <ImgList />
      </div>
    </>
  );
}

export default Search;
