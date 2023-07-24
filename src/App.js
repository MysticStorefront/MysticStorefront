import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Item from './components/Item';
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/item" element={<Item />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
