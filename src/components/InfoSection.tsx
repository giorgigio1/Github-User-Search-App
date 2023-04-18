import Bitmap from "../images/Bitmap.png";
import Location from "../assets/Company";
import Website from "../assets/Website";
import Twitter from "../assets/Twitter";
import Company from "../assets/Company";
import { useContext } from "react";
import { ThemeContext } from "../App";
import dateFormat from "dateformat";

const InfoSection = () => {
  const context = useContext(ThemeContext);

  const handlePicture = () => {
    if (context?.data?.avatar_url === undefined) {
      return Bitmap;
    }
    return context?.data?.avatar_url;
  };

  const handleName = () => {
    if (context?.data?.name) {
      return context?.data?.name;
    }
    return "The Octocat";
  };

  const handleJoined = () => {
    if (context?.data?.created_at) {
      return "Joined " + dateFormat(context?.data?.created_at, "d mmmm yyyy");
    }
    return "Joined 25 Jan 2011";
  };

  const handleBio = () => {
    if (context?.data?.bio === null) {
      return "";
    }
    if (context?.data?.bio) {
      return context?.data?.bio;
    }
    return `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          odio. Quisque volutpat eros. amet, consectetuer adipiscing elit.
          Donec odio. mattis eros.`;
  };

  const handleRepos = () => {
    if (context?.data?.public_repos) {
      return context?.data?.public_repos;
    }
    return "8";
  };

  const handleFollowers = () => {
    if (context?.data?.followers === undefined) {
      return "3938";
    }
    return context?.data?.followers;
  };

  const handleFollowing = () => {
    if (context?.data?.following === undefined) {
      return "9";
    }
    return context?.data?.following;
  };

  const handleLocation = () => {
    if (context?.data?.location === undefined) {
      return "San Francisco";
    }
    return context?.data?.location;
  };

  const handleBlog = () => {
    if (context?.data?.blog === undefined) {
      return "https://github.blog";
    }
    return context?.data?.blog;
  };

  const handleTwitter = () => {
    if (context?.data?.twitter_username === undefined || context?.data?.twitter_username === null) {
      return "Not Available";
    }
    return context?.data?.twitter_username;
  };

  return (
    <section className="infoSection">
      <div className="top">
        <figure>
          <img src={handlePicture()} alt="" />
        </figure>
        <div className="rightSide">
          <div className="rightSide2">
            <div className="name">
              <h2>{handleName()}</h2>
              <p>@octocat</p>
            </div>
            <p>{handleJoined()}</p>
          </div>
        </div>
      </div>
      <p className="description">{handleBio()}</p>
      <div className="middle">
        <div className="repos">
          <h4>Repos</h4>
          <p>{handleRepos()}</p>
        </div>
        <div className="followers">
          <h4>Followers</h4>
          <p>{handleFollowers()}</p>
        </div>
        <div className="following">
          <h4>Following</h4>
          <p>{handleFollowing()}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="locationWebsite">
          <figure>
            <Location fill={context?.theme === "light" ? "#4B6A9B" : "white"} />
            <span>{handleLocation()}</span>
          </figure>
          <figure>
            <Website fill={context?.theme === "light" ? "#4B6A9B" : "white"} />
            <span>{handleBlog()}</span>
          </figure>
        </div>
        <div className="twitterCompany">
          <figure>
            <Twitter fill={context?.theme === "light" ? "#4B6A9B" : "white"} />
            <span>{handleTwitter()}</span>
          </figure>
          <figure>
            <Company fill={context?.theme === "light" ? "#4B6A9B" : "white"} />
            <span>@github</span>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
