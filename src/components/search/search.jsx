import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ApplicationContext } from "../../context/context.jsx";

import { useDebounce } from "../../hooks/debounse";
import "../../style/search.css";
import { ImgList } from "../imgList/ImgList.jsx";

export function Search() {
  const { search, Setsearch } = useContext(ApplicationContext);
  const [isSearch, SetisSearch] = useState(false);
  const debounce = useDebounce(search);

  useEffect(() => {
    console.log(debounce);
    if (debounce.length > 3) {
      SetisSearch(true);
    } else {
      SetisSearch(false);
    }
  }, [debounce]);

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
        {isSearch && <ImgList />}
      </div>
    </>
  );
}

export default Search;
