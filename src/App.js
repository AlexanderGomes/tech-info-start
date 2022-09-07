import { Navbar, Footer } from "./components";
import {Home, Details} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Details />} />
        </Routes>
        <div className="app__footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
