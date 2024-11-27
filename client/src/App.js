import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
         <Route path="/login" element={<Login />} />
       </Routes>
     </Router>
   );
 }

 export default App;
