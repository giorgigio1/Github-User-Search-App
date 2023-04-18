import { useContext } from "react";
import Moon from "../images/Moon.svg";
import Sun from "../images/Sun.svg";
import { ThemeContext } from "../App";

const Header = () => {
  const context = useContext(ThemeContext);

  return (
    <header>
      <h2 id={context?.theme}>devfinder</h2>
      <figure onClick={context?.toggleTheme}>
        <span>{context?.theme === "light" ? "DARK" : "LIGHT"}</span>
        <img src={context?.theme === "light" ? Moon : Sun} alt="" />
      </figure>
    </header>
  );
};

export default Header;
