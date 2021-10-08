import { useEffect, useState } from "react";

/**
 * Reads and Toggles the user's prefered GUI theme. Value gets stored on localStorage.
 * @returns Array with user `'theme'` and `toggle function`
 */
export default function useDarkTheme(): [string, () => void] {
  const [theme, setTheme] = useState("light");

  const saveTheme = (userTheme: string): void => {
    window.localStorage.setItem("theme", userTheme);
    setTheme(userTheme);
  };

  const themeToggle = () => {
    theme === "light" ? saveTheme("dark") : saveTheme("light");
  };

  useEffect(() => {
    const userTheme = window.localStorage.getItem("theme");
    userTheme === "dark" ? saveTheme("dark") : saveTheme("light");
  }, [theme]);

  return [theme, themeToggle];
}
