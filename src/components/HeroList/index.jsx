import React, { useState } from 'react'
import { HeroCard } from '../';
import { useHero } from "../../contexts";

export default function ShowList() {

    const { heroData } = useHero();
    function renderShows() {
        return heroData
        .map(hero => hero.images.md ? <HeroCard key={hero.id} hero={hero} /> : "")
    }


    return (
        <>
        {renderShows()}
        </>
    );
}