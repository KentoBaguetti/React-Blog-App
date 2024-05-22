import Navbar from "./Navbar.js";
import Home from "./Home.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

// Starting the json-server: npx json-server --watch react-blog-app/data/db.json --port 8000
