import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home/HomePage';
import { SectionOrdenPage } from './pages/pasarela-orden/SectionOrdenPage';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/section-orden" element={<SectionOrdenPage />}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
