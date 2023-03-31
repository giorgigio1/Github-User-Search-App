import "./App.css";
import Moon from "./images/Moon.svg";
import Location from "./images/Location.svg";
import Website from "./images/Website.svg";
import Twitter from "./images/Twitter.svg";
import Company from "./images/Company.svg";
import Bitmap from "./images/Bitmap.png";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

export default function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <header>
          <h2>devfinder</h2>
          <figure>
            <span>DARK</span>
            <img src={Moon} alt="" />
          </figure>
        </header>
        <section className="searchSection">
          <Input type="text" placeholder="Search GitHub username..." />
          <Button onClick={() => ""}>Search</Button>
        </section>
        <section className="infoSection">
          <div className="top">
            <figure>
              <img src={Bitmap} alt="" />
            </figure>
            <div className="rightSide">
              <div className="rightSide2">
                <div className="name">
                  <h2>The Octocat</h2>
                  <p>@octocat</p>
                </div>
                <p>Joined 25 Jan 2011</p>
              </div>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat  eros. amet, consectetuer
            adipiscing elit. Donec odio. mattis eros.
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
                <img src={Location} alt="" />
                <span>San Francisco</span>
              </figure>
              <figure>
                <img src={Website} alt="" />
                <span>https://github.blog</span>
              </figure>
            </div>
            <div className="twitterCompany">
              <figure>
                <img src={Twitter} alt="" />
                <span>Not Available</span>
              </figure>
              <figure>
                <img src={Company} alt="" />
                <span>@github</span>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
