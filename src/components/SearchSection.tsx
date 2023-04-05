import { Button } from "./Button";
import { Input } from "./Input";
import { useContext } from "react";
import { ThemeContext } from "../App";

const SearchSection = () => {
    const context = useContext(ThemeContext);

    return (
        <section className="searchSection" id={context?.theme}>
            <Input type="text" placeholder="Search GitHub username..." id={context?.theme} />
            <Button onClick={() => ""}>Search</Button>
          </section>
    )
}

export default SearchSection;