import React from "react"

export default function HeroCard ({ hero }) {

    return (
        <div className="herocard">
            
            <h2>{hero.name}</h2>
            <img src={hero.images.md}></img>
            
        </div>
    )
};