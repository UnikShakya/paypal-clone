import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './Pages/Aboutus.jsx';
import Home from './Pages/Home.jsx';
import Header from './Components/Header';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
