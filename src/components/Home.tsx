import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import {WrapperHeroDependence} from "../utils/WrapperHeroDependence.tsx";

const Home = () => {


    return (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <FarGalaxy/>
        </main>
    );
};

export default WrapperHeroDependence(Home);
