import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  background: 'blue'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to='/' exact style={{link}} activeStyle={{background: 'dark blue'}}>Home</NavLink><br />
      <NavLink to='/movies' exact style={{link}} activeStyle={{background: 'dark blue'}}>Movies</NavLink><br />
      <NavLink to='/directors' exact style={{link}} activeStyle={{background: 'dark blue'}}>Directors</NavLink><br />
      <NavLink to='/actors' exact style={{link}} activeStyle={{background: 'dark blue'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
