import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-link">
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <p>Cryptocurrency</p>
    </nav>
  );
}

export default Navbar;
