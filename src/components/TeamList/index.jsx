import React from "react"
import TeamHeroCard from "../TeamHeroCard"
import { useTeam } from "../../contexts"
import { Link } from "react-router-dom"

export default function TeamList() {

    const {teamData} = useTeam()

    return (
        <div className="teamlist">
            {teamData.map(hero => hero.images.md ? <Link to={`${hero.id}`} key={hero.id}><TeamHeroCard key={hero.id} hero={hero} /></Link> : "")}
        </div>
    )
}
