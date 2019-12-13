import React, { useEffect } from 'react';
// import { useDarkMode} from '../utils';

const Navbar = (props) => {
  console.log('Navbar: ', props.darkMode === true)
  // Set current darkMode to previous value on componentDidMount
  useEffect(() => JSON.parse(localStorage.getItem('dark')) ? props.setDarkMode(true) : console.log(false), []);

  const toggleMode = e => {
    e.preventDefault();
    props.setDarkMode(!props.darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
