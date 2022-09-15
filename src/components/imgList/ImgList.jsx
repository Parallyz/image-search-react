import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

import { ImgURL } from "../../Routes/path";
import { ApplicationContext } from "../../context/context";
import { useDebounce } from "../../hooks/debounse";
import { Img } from "./Img";

export function ImgList() {
  const { search } = useContext(ApplicationContext);

  const debounce = useDebounce(search);
  const [images, SetImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(ImgURL, {
        params: {
          client_id: `${process.env.REACT_APP_UNPLASH_API_KEY}`,
        },
      });
      SetImages(response.data);
    };
    if (debounce.length > 3) fetchData();
  }, [debounce]);

  return (
    <>
      {debounce.length > 3 && !images ? (
        <p>Loading</p>
      ) : (
        <div className="img__grid">
          {images?.map((img) => (
            <Img key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
}
