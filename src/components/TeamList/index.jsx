import React from "react"
import TeamHeroCard from "../TeamHeroCard"
import { useTeam } from "../../contexts"

export default function TeamList() {

    const {teamData} = useTeam()

    return (
        <div className="teamlist">
            {teamData.map(hero => hero.images.md ? <TeamHeroCard key={hero.id} hero={hero} /> : "")}
        </div>
    )
}
