import React, { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === "light" ? "bg-white" : "bg-gray-900";
  }, [theme]);

  return (
    <div>
      <button
        className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
      <button
        className="px-4 py-2 bg-gray-800 text-white rounded"
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
