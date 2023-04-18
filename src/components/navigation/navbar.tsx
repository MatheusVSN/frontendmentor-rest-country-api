import { useTheme } from "next-themes";

import { MdOutlineDarkMode } from "react-icons/md"; // White themed moon
import { MdDarkMode } from "react-icons/md"; // Dark themed moon

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex bg-white dark:bg-very-dark-blue drop-shadow-md p-4 md:px-16">
      <h1
        className={`${
          theme === "dark" ? "text-white" : "text-very-dark-blue"
        } font-bold text-xl`}
      >
        Where in the world?
      </h1>
      <button
        onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark")
        }}
        className="flex gap-2 items-center ml-auto"
      >
        {theme === "dark" ? <MdOutlineDarkMode /> : <MdDarkMode />}
        <span
          className={theme === "dark" ? "text-white" : "text-very-dark-blue"}
        >
          Dark Mode
        </span>
      </button>
    </nav>
  );
}
