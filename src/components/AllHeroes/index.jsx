import React, {useEffect} from "react"
import { HeroList } from "../";
import { useHero } from "../../contexts";

export default function AllHeroes() {
    
    const {heroData, setHeroData} = useHero();

    useEffect(() => {

        async function searchAPI() {
            const response = await fetch(`https://akabab.github.io/superhero-api/api/all.json`);
            const data = await response.json();
            setHeroData(data);
        }

        searchAPI();

    }, []);

    return (
        <>
            {heroData[1] ? <HeroList /> : <></>}
        </>
    );
}
