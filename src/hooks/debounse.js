import  { useEffect, useState } from "react";

export const useDebounce = (value, delay = 300) => {
  const [search, SetSeach] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
       SetSeach(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return search;
};
