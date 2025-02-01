import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './Component/Navbar';  
import Project from './Pages/Project';
import Homepage from './Pages/Homepage' ; 

import About from './Pages/About';
import Contact from './Pages/Contact';
import Showcase from './Component/Showcase';

const App = () => {  
  return (  
    <Router>  
      <div>  
        <Navbar />  
        <Routes>  
          <Route path="/" element={<Homepage />} />  
          
    
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
           <Route path='/About' element={<About />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Showcase' element={<Showcase />} />
        </Routes>  
          
      </div>  
    </Router>  
  );  
};  

export default App;

