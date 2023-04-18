import { Button } from "./Button";
import { Input } from "./Input";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import axios from "axios";

interface MyData {
  id: number;
  name: string;
}

const SearchSection = () => {
  const context = useContext(ThemeContext);
  const [user, setUser] = useState(null);
//   console.log(user);

  const handleChange = (e: any) => {
    setUser(e.target.value);
  };

  const handleNoResult = () => {
    if (context?.data?.name) {
        return 
      }
      if (context?.data) {
        return "No results";
      }
  };

  const handleRequest = () => {
    axios
      .get<any>(`https://api.github.com/users/${user}`)
      .then((response: { data: any }) => {
        context?.setData(response.data);
      })
      .catch((error: Error) => {
        context?.setData(error.message);
      });
  };

  return (
    <section className="searchSection" id={context?.theme}>
      <Input
        type="text"
        placeholder="Search GitHub username..."
        id={context?.theme}
        onChange={handleChange}
      />
      <span>{handleNoResult()}</span>
      <Button onClick={handleRequest}>Search</Button>
    </section>
  );
};

export default SearchSection;
