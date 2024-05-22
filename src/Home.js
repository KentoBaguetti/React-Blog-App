import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "First Title",
      body: "This is the body of the first object.",
    },
    {
      id: 2,
      title: "Second Title",
      body: "This is the body of the second object.",
    },
    {
      id: 3,
      title: "Third Title",
      body: "This is the body of the third object.",
    },
    {
      id: 4,
      title: "Fourth Title",
      body: "This is the body of the fourth object.",
    },
    {
      id: 5,
      title: "Fifth Title",
      body: "This is the body of the fifth object.",
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
