import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Doctor from './pages/Doctor';
import Department from './pages/Department';
import Contact from './pages/Contact';
function App() {
  return (
   

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/department" element={<Department />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  </BrowserRouter>

    
    
  


   
  );
}

export default App;
