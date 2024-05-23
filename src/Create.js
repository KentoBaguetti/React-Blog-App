import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };

    setIsPending(true);

    axios.post("http://localhost:8000/blogs", blog).then(() => {
      alert("New blog added");
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          placeholder="Enter your title here..."
          required
          value={title}
          // e = the event object
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          placeholder="Enter your blog body here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <input
          type="text"
          required
          placeholder="Enter your name here..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && <button type="button">Loading...</button>}
      </form>
    </div>
  );
};

export default Create;
