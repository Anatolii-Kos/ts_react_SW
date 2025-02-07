import Home from "./Home.jsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import {navItems} from "../utils/constants.js";

interface Props {
    page:string;
}

const Main = ({page}:Props) => {

    switch (page) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }
};

export default Main;
