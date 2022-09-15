import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDebounce } from "../../hooks/debounse";
import "../../style/search.css";

export function Search() {
  const [search, Setsearch] = useState("");
  const debounce = useDebounce(search);

  useEffect(() => {
    console.log(debounce);
  },[debounce])


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
      </div>
    </>
  );
}

export default Search;
