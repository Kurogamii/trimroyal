import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const page = window.location.pathname;
    setCurrentPage(page);
    console.log(page)
  }, []);

  return (
    <header className="header">
      <div className="logo">TRIM</div>
      <nav className="navigation">
        <ul>
          <li ><a href="/">Home</a></li>
          <li ><a href="/about">Services</a></li>
          <li ><a href="/about">About</a></li>
          <li ><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
