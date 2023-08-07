import './App.css';
import React, {useState} from "react";
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
import Footer2 from './components/Footer2';
function App() {
  const [dat, setDat] = useState({title: ""});
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home setData={setDat}/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/item/:itemId" element={<Item data={dat} setData={setDat}/>} />
        </Routes>
      </div>
      <Footer2 />
    </BrowserRouter>
  );
}
export default App;
