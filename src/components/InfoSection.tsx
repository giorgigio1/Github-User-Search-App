import Bitmap from "../images/Bitmap.png"
import Location from "../assets/Company"
import Website from "../assets/Website"
import Twitter from "../assets/Twitter"
import Company from "../assets/Company"
import { useContext } from "react"
import { ThemeContext } from "../App"

const InfoSection = () => {
    const context = useContext(ThemeContext)
    return (
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
                  <Location fill={context?.theme === "light" ? "black" : "white"} />
                  <span>San Francisco</span>
                </figure>
                <figure>
                  <Website fill={context?.theme === "light" ? "black" : "white"} />
                  <span>https://github.blog</span>
                </figure>
              </div>
              <div className="twitterCompany">
                <figure>
                  <Twitter fill={context?.theme === "light" ? "black" : "white"} />
                  <span>Not Available</span>
                </figure>
                <figure>
                  <Company fill={context?.theme === "light" ? "black" : "white"} />
                  <span>@github</span>
                </figure>
              </div>
            </div>
          </section>
    )
}

export default InfoSection;