import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => (
  <header className="h-16 w-[calc(100% - 6rem)] flex flex-row justify-between items-center my-6 mx-12 border-b-2 border-black pb-4">
    <NavLink className="h-full flex flex-row gap-3 justify-between items-center" to="/">
      <img className="h-full" src={logo} alt="logo" />
      <span className="text-3x1">
        Space Travelers&apos; Hub
      </span>
    </NavLink>
    <nav className="flex flex-row gap-3 justify-between items-center">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/mission">Mission</NavLink>
      <hr />
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  </header>
);

export default Header;
