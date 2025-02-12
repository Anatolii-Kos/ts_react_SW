import Navigation from "./Navigation.jsx";
import {useContext} from "react";
import {Swcontext} from "../utils/constants.ts";


const Header = () => {
    const {title} = useContext(Swcontext)


    return (
        <header className={'rounded-t-2xl bg-grey-color'}>
            <Navigation/>
            <h1 className="text-center text-3xl py-6">{title}</h1>
        </header>
    );
};

export default Header;
