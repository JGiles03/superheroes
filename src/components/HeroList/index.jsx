import React, { useState } from 'react'
import { HeroCard } from '../';
import { useHero } from "../../contexts";
import { Link } from 'react-router-dom';

export default function HeroList() {

    const { heroData } = useHero();

    return (
        <>
        {heroData
        .map(hero => hero.images.md ? <Link to={`${hero.id}`} key={hero.id}><HeroCard key={hero.id} hero={hero} /></Link> : "")}
        </>
    );
}