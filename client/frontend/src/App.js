import './App.css';
import {BrowserRouter as Router , Route ,Routes} from "react-router-dom";
import {Home} from './pages/home'
import {Sign}from './pages/login'
import React from 'react'
function App() {
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<Home />}  />
       <Route exact path="/signin" element={<Sign />}  />
     </Routes>
   </Router>
  );
 }


export default App;
