import React from "react"

export default function TeamHeroCard({hero}) {
  return (
    <div>
        <p>TeamHeroCard</p>
        <img src={hero.images.sm} alt={`Image of: ${hero.name}`}></img>

    </div>
  )
}
