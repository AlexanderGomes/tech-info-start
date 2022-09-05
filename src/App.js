import { Navbar, Hero, Post, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <div className="navbar">
          <Navbar />
        </div>

         <Home />

         
        <div className="app__footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

{
  /* <div className="app__main">
<div className="navbar">
  <Navbar />
</div>
<div className="app__hero">
  <Hero />
</div>
<div className="app__post__main">
  <Post />
</div>
<div className="app__footer">
  <Footer />
</div>
</div> */
}
