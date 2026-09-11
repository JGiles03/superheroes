import React, {useState, useEffect} from "react"
import { SearchBar, HeroCard } from "../";
import { useHero } from "../../contexts";
import { Link } from "react-router-dom";

export default function SearchWidget() {
    
    const {heroData, setHeroData} = useHero();
    const [searchString, setSearchString] = useState(1);

    useEffect(() => {

        async function searchAPI() {
            const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${searchString}.json`);
            const data = await response.json();
            setHeroData(data);
            console.log(data);
        }

        searchAPI();

    }, [searchString]);

    function handleSearch(userInput) {
        setSearchString(userInput)
    }

    return (
        <>
            <SearchBar lastSearch={searchString} handleSearch={handleSearch}/>
            {heroData.images ? <Link to={`${heroData.id}`} key={heroData.id}><HeroCard hero={heroData} /></Link> : <></> }
        </>
    );
}