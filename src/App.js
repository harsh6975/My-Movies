import './App.css';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbara/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Movies/>
    </div>
  );
}

export default App;
