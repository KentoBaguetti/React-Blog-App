import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import BlogDetails from "./BlogDetails.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

// Starting the json-server: npx json-server --watch react-blog-app/data/db.json --port 8000
