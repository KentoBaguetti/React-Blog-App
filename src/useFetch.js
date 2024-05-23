import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        // catch a server error
        if (response.status !== 200) {
          throw Error("could not fetch data for that resource");
        }

        console.log(response);

        setData(response.data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
        console.log(error.message); // catch a network error, eg connecting to the server
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
