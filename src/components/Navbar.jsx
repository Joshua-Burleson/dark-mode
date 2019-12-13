import React, { useEffect } from 'react';
import { useDarkMode} from '../utils';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(localStorage.getItem('dark') || false);

  // Set current darkMode to previous value on componentDidMount
  useEffect(() => localStorage.getItem('dark') === 'true' ? setDarkMode(true) : console.log(false), []);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
