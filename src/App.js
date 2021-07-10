import "./App.css";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <section className="nav">
        <Navbar />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="movie">
        <Movies />
      </section>
    </div>
  );
}

export default App;
