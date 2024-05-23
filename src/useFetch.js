import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // abort the get request if it's not needed
    const abortCont = new AbortController();

    const fetchData = async () => {
      try {
        const response = await axios.get(url, { signal: abortCont.signal });

        // catch a server error
        if (response.status !== 200) {
          throw Error("could not fetch data for that resource");
        }

        setData(response.data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Get request aborted");
        } else {
          setError(error.message);
          setIsPending(false);
        }
      }
    };
    fetchData();

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
