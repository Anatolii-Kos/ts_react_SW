import Navigation from "./Navigation.jsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constants.ts";



const Header = () => {
    const {hero,errorFlag,} = useContext(SWContext);

     return (
        <header className={'rounded-t-2xl bg-grey-color'}>
            <Navigation/>
            <h1 className="text-center text-3xl py-6">{(errorFlag)?"Error":characters[hero].name }</h1>
        </header>
    );
};

export default Header;
