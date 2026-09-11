import React from "react"

export default function TeamHeroCard({hero}) {
  return (
    <div className="teamherocard">
        <p>{hero.name}</p>
        <img src={hero.images.sm} alt={`Image of: ${hero.name}`}></img>
        <div className="stats">
            <h3>Stats</h3>
            <p>Intelligence: {hero.powerstats.intelligence || 0}</p>
            <p>Strength: {hero.powerstats.strength || 0}</p>
            <p>Speed: {hero.powerstats.speed || 0}</p>
            <p>Durability: {hero.powerstats.durability || 0}</p>
            <p>Power: {hero.powerstats.power || 0}</p>
            <p>Combat: {hero.powerstats.combat || 0}</p>
        </div>
    </div>
  )
}
