import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First Title",
      author: "Kentaro",
      body: "This is the body of the first object.",
    },
    {
      id: 2,
      title: "Second Title",
      author: "Hyogara",
      body: "This is the body of the second object.",
    },
    {
      id: 3,
      title: "Third Title",
      author: "Kentaro",
      body: "This is the body of the third object.",
    },
    {
      id: 4,
      title: "Fourth Title",
      author: "Chocochan",
      body: "This is the body of the fourth object.",
    },
    {
      id: 5,
      title: "Fifth Title",
      author: "Kentaro",
      body: "This is the body of the fifth object.",
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
