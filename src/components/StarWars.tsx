import {starWarsInfo} from "../utils/constants.js";
import Text from "./ui/Text.jsx";

import {WrapperHeroDependence} from "../utils/WrapperHeroDependence.tsx";

const StarWars = () => {


    return(
        <Text>{starWarsInfo}</Text>
    );
};

export default WrapperHeroDependence(StarWars);
