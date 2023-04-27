/* eslint-disable */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowLeft, FaMicrophone } from 'react-icons/fa';
import { faGear } from "@fortawesome/free-solid-svg-icons";

function Navbar({handleFilter, viewAll}) {
  const location = useLocation();
  const isHome = location.pathname === '/home';
  
  const handleClick = () => {
    handleFilter();
  }
  const handleAll = () => {
    viewAll();
  }

  return (
    <nav className="nav-bar">
      <ul className="nav-link">
        <li>
          <Link to="/home">{isHome ? 'Home' : <FaArrowLeft />}</Link>
        </li>
        {isHome && <button className='crypto-btn' onClick={handleAll}>All bitcoins</button> }
        {isHome &&<button className='crypto-btn' onClick={handleClick}>Price greater than 100$</button>}
        <div className='nav-icons'>
          <li>
            <FaMicrophone />
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} />
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
