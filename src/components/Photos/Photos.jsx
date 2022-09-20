import React, { useState, useContext, useEffect } from "react";

import { ApplicationContext } from "../../context/context";
import { useDebounce } from "../../hooks/useDebounse";
import { searchPhotos } from "../../API/fetch";
import { useRef } from "react";
import { useObserver } from "../../hooks/useObserver";
import { PhotoList } from "./PhotoList";
import { useFetching } from "../../hooks/useFetching";

export function ImgList() {
  const { search } = useContext(ApplicationContext);

  const debounceSearch = useDebounce(search);

  const [images, SetImages] = useState([]);

  const [page, SetPage] = useState(1);
  const [totalPages, SetTotalPages] = useState(1);

  const lastElement = useRef();

  const [fetching, isLoading, error] = useFetching(async () => {
    let response = await searchPhotos(debounceSearch, page);
    if (!error) {
      SetTotalPages(response.data?.total_pages);
      SetImages((prev) => prev.concat(testData));
    }
  });

  useObserver(lastElement, page < totalPages && !error, isLoading, () => {
    SetPage((prev) => prev + 1);
  });

  useEffect(() => {
    if (debounceSearch.length > 3) {
      fetching();
    }
  }, [debounceSearch, page]);

  return (
    <>
      <div className="img__grid">
        <PhotoList list={images} isSearch={debounceSearch.length > 3} />
        <div ref={lastElement}></div>
      </div>
    </>
  );
}
