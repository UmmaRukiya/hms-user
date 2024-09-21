import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Department from './pages/Department';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
function App() {
  return (
   

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/department" element={<Department />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
  </BrowserRouter>

    
    
  


   
  );
}

export default App;
