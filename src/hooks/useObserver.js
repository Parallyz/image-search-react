import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
  const observer = useRef();

  useEffect(() => {

    if (isLoading) return;
    console.log("Obeserve");

    if (observer.current) observer.current.disconnect();

    var cb = function (entries, observer) {
      console.log("cb Obeserve");

      if (entries[0].isIntersecting && canLoad) {
        console.log("See");

        callback();
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
