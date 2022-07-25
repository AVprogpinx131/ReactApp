import React, { Component } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        React App
      </Link>
      <ul>
        <Link to="/counter">Counter</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/promises">Promises</Link>
        <Link to="/searchbar">Searchbar</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
