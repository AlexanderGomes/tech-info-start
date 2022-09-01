import { Navbar, Hero } from "./components";

function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="app__hero">
        <Hero />
      </div>
    </div>
  );
}

export default App;
