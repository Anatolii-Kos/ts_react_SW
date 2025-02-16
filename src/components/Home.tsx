import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import {useParams} from "react-router";
import {characters, defaultHero} from "../utils/constants.ts";
import ErrorPage from "./ErrorPage.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const Home = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero}=useContext(SWContext);

    useEffect(() => {
        if (!characters[heroId]) {
            return
        }
        changeHero(heroId);

    },[heroId]);

    return characters[heroId] ? (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    ) : <ErrorPage/>;
};

export default Home;
