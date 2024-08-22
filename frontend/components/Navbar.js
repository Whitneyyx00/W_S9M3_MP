import React from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const toggleMode = (e) => {
    e.preventDefault();
    toggleDarkMode(); // Use toggleDarkMode function to handle the state change
  };

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className='dark-mode__container'>
        Dark Mode
        <div className="dark-mode__toggle">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
