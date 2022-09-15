import axios from "axios";
import { searchPhotosUrl, getPhotosUrl } from "../Routes/path.js";

export const fetchPhotos = async (page = 1) => {
  const response = await axios.get(getPhotosUrl, {
    params: {
      client_id: `${process.env.REACT_APP_UNPLASH_API_KEY}`,
      page: page,
    },
  });
  return response;
};

export const searchPhotos = async (search, page = 1) => {
  const response = await axios.get(searchPhotosUrl, {
    params: {
      client_id: `${process.env.REACT_APP_UNPLASH_API_KEY}`,
      page: page,
      query: search,
    },
  });
  return response;
};
