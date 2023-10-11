import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; 

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default DarkModeToggle;
