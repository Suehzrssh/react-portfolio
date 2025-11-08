import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "Light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        {theme === "Dark" && (
          <>
            {/* 🌟 Stars */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${2 + Math.random() * 3}px`,
                  height: `${2 + Math.random() * 3}px`,
                }}
              />
            ))}

            {/* ☄️ Meteors */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="meteor"
                style={{
                  left: `${i * 20 + 10}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
          </>
        )}

        <div className="content">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
