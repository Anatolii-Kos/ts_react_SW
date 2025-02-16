import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { characters, defaultHero } from "./constants";
import { SWContext } from "./context";
import ErrorPage from "../components/ErrorPage";
import {WrapperHOC, WrapperProps} from "./types";


export const WrapperHeroDependence: WrapperHOC<WrapperProps> = (WrappedComponent) => {
    return function EffectComponent(props) {
        const { heroId = defaultHero } = useParams();
        const { changeHero, changeErrorFlag, errorFlag} = useContext(SWContext);
        changeErrorFlag(false)
        useEffect(() => {
            if (characters[heroId]) {
                changeHero(heroId);
            }
            else{
                changeErrorFlag(true)
                }

        }, [heroId, errorFlag]);

        return characters[heroId] ? (
            <div>
                <WrappedComponent {...props} />
            </div>
        ) : (
            <ErrorPage />
        );
    };
};
