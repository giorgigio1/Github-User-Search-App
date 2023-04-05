import "./App.css";
import Moon from "./images/Moon.svg";
import Sun from "./images/Sun.svg";
import Website from './assets/Website'
import Location from './assets/Location'
import Twitter from './assets/Twitter'
import Company from './assets/Company'
import Bitmap from "./images/Bitmap.png";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext<any>(null);

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="wrapper" id={theme}>
        <div className="main">
          <header >
            <h2 id={theme}>devfinder</h2>
            <figure onClick={toggleTheme}>
              <span>{theme === 'light' ? "DARK" : "LIGHT"}</span>
              <img src={theme === 'light' ? Moon: Sun} alt="" />
            </figure>
          </header>
          <section className="searchSection" id={theme}>
            <Input type="text" placeholder="Search GitHub username..." id={theme} />
            <Button onClick={() => ""}>Search</Button>
          </section>
          <section className="infoSection" >
            <div className="top">
              <figure>
                <img src={Bitmap} alt="" />
              </figure>
              <div className="rightSide">
                <div className="rightSide2">
                  <div className="name">
                    <h2 >The Octocat</h2>
                    <p>@octocat</p>
                  </div>
                  <p>Joined 25 Jan 2011</p>
                </div>
              </div>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat eros. amet, consectetuer adipiscing elit.
              Donec odio. mattis eros.
            </p>
            <div className="middle">
              <div className="repos">
                <h4>Repos</h4>
                <p>8</p>
              </div>
              <div className="followers">
                <h4>Followers</h4>
                <p>3938</p>
              </div>
              <div className="following">
                <h4>Following</h4>
                <p>9</p>
              </div>
            </div>
            <div className="bottom">
              <div className="locationWebsite">
                <figure>
                  <Location fill={theme === "light" ? "black" : "white"} />
                  <span>San Francisco</span>
                </figure>
                <figure>
                  <Website fill={theme === "light" ? "black" : "white"} />
                  <span>https://github.blog</span>
                </figure>
              </div>
              <div className="twitterCompany">
                <figure>
                  <Twitter fill={theme === "light" ? "black" : "white"} />
                  <span>Not Available</span>
                </figure>
                <figure>
                  <Company fill={theme === "light" ? "black" : "white"} />
                  <span>@github</span>
                </figure>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
