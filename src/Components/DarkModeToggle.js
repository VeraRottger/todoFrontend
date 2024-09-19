import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => (
  <button className="dark-mode-toggle" onClick={toggleDarkMode}>
    {darkMode ? <FaSun className="dark-mode-toggle__icon" /> : <FaMoon className="dark-mode-toggle__icon" />}
  </button>
);

export default DarkModeToggle;