import React from "react"

export default function TeamHeroCard({hero}) {
  return (
    <div className="teamherocard">
        <p>{hero.name}</p>
        <img src={hero.images.sm} alt={`Image of: ${hero.name}`}></img>
    </div>
  )
}
