import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PostDetails from "./pages/PostDetails/Details";

function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<PostDetails />} />
        </Routes>
        <div className="app__footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
