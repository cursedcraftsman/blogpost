import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts">Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
