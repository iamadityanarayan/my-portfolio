// src/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the theme context
interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Custom hook to access the theme context
// eslint-disable-next-line
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Create a theme provider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', JSON.stringify(!isDarkMode));
  };

  useEffect(() => { // eslint-disable-next-line
    const ls: any | null = localStorage.getItem('theme');  
    if (ls === null || ls === undefined) {
      return;
    } else {
      setIsDarkMode(JSON.parse(`${localStorage.getItem('theme')}`));
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
