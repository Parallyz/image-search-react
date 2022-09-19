import React, { useState, useContext, useEffect } from "react";

import { ApplicationContext } from "../../context/context";
import { useDebounce } from "../../hooks/useDebounse";
import { PhotoElement } from "./PhotoElement";
import { searchPhotos } from "../../API/fetch";
import { useRef } from "react";
import { useObserver } from "../../hooks/useObserver";
import { PhotoList } from "./PhotoList";

export function ImgList() {
  const { search } = useContext(ApplicationContext);

  const debounceSearch = useDebounce(search);

  const [images, SetImages] = useState([]);
  const [isFound, SetIsFound] = useState(true);
  const [isLoading, SetIsLoading] = useState(false);

  const [page, SetPage] = useState(1);
  const [totalPages, SetTotalPages] = useState(1);

  const lastElement = useRef();

  useObserver(
    lastElement,
    page < totalPages && debounceSearch.length > 3,
    isLoading,
    () => {
      SetPage((prev) => prev + 1);
    }
  );

  useEffect(() => {
    const getData = async () => {
      SetIsLoading(true);
     let response = await searchPhotos(debounceSearch, page);
      SetIsLoading(false);

      console.log(response);

      //SetTotalPages(response.data?.total_pages);
      // SetTotalPages(2);

      //SetImages([...images, ...response.data.results]);
      //  SetImages([]);
    };
    if (debounceSearch.length > 3) {
      getData();
    }
  }, [debounceSearch, page]);

  return (
    <>
      {!isFound ? (
        <div className="not__found">Not found</div>
      ) : (
        <div>
          <div className="img__grid">
            {/*<PhotoList list={images} />*/}
            <div ref={lastElement}></div>
          </div>
          <div className="pagination"></div>
        </div>
      )}
    </>
  );
}
