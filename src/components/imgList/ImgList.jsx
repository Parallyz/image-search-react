import React, { useState, useContext, useEffect } from "react";

import { ApplicationContext } from "../../context/context";
import { useDebounce } from "../../hooks/debounse";
import { Img } from "./Img";
import { searchPhotos } from "../../API/fetch";

export function ImgList() {
  const { search } = useContext(ApplicationContext);
  const debounceSearch = useDebounce(search);
  const [images, SetImages] = useState([]);
  const [isFound, SetisFound] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let response = await searchPhotos(debounceSearch);
      if (response.data?.results) {
        SetisFound(false);
      }
      SetImages(response.data?.results);
    };
    if (debounceSearch.length > 3) {
      getData();
    }
  }, [debounceSearch]);

  return (
    <>
      {!isFound  ? (
        <div className="not__found">Not found</div>
      ) : (
        <div>
          <div className="img__grid">
            {images?.map((img) => (
              <Img key={img.id} {...img} />
            ))}
          </div>
          <div className="pagination"></div>
        </div>
      )}
    </>
  );
}
