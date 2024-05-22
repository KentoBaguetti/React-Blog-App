import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blogs");

        if (response.status !== 200) {
          throw Error("could not fetch data for that resource");
        }

        console.log(response);

        setBlogs(response.data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
        console.log(error.message); // catch a network error, eg connecting to the server
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
