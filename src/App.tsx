import "./App.css";
import { useState } from "react";
import { createContext } from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import InfoSection from "./components/InfoSection";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  data: any;
  setData: any;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function App() {
  const [theme, setTheme] = useState<string>("light");
  const [data, setData] = useState<any>(null);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, data, setData }}>
      <div className="wrapper" id={theme}>
        <div className="main">
          <Header />
          <SearchSection />
          <InfoSection />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
