import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './Component/Navbar';  

import Homepage from './Pages/Homepage' ; 

import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {  
  return (  
    <Router>  
      <div>  
        <Navbar />  
        <Routes>  
          <Route path="/" element={<Homepage />} />  
          
    
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
        </Routes>  
          
      </div>  
    </Router>  
  );  
};  

export default App;

