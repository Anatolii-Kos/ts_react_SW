import {useContext, useEffect, useState} from "react";
import {characters, defaultHero, period_month} from "../utils/constants.js";
import {HeroInfo} from "../utils/types";
import {useNavigate, useParams} from "react-router";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";


const AboutMe = () => {
    const [hero, setHero] = useState({} as HeroInfo);
    const navigate = useNavigate();
    const {heroId =defaultHero} = useParams();
    const {changeHero}=useContext(SWContext);


    useEffect(() => {
        if(!(heroId in characters)){
            navigate("/error");
            return;
        }
        changeHero(heroId);
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);

        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    } as HeroInfo;
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [heroId])

    return characters[heroId] ? (
        <>
            {(!!hero) &&
                <div className={'text-[2em] text-justify tracking-widest leading-14 ml-8'}>
                    {Object.keys(hero).map(key => <p key={key}>
                        <span
                            className={'text-3xl capitalize'}>{key.replace('_', ' ')}</span>: {hero[key as keyof HeroInfo]}
                    </p>)}
                </div>
            }
        </>
    ) : <ErrorPage/>;
};

export default AboutMe;
