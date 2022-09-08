import { Navbar, Footer } from "./components";
import {Home, Details, Postmain} from "./pages";
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
          <Route path="/post" element={<Postmain />} />
        </Routes>
        <div className="app__footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
