import React from "react"
import { useTeam } from "../../contexts"

export default function HeroCard ({ hero }) {
    const {teamData, setTeamData} = useTeam()

    const addToTeam = () => {
        if(teamData.length === 6){
            teamData.shift()
        }
        //check if duplicate hero
        teamData.push(hero)
        setTeamData(teamData)
    }

    return (
        <div className="herocard">
            
            <h2>{hero.name}</h2>
            <img src={hero.images.md}></img>
            <button onClick={addToTeam} >Add to team</button>
            {/* make button looked clicked if hero is in team list */}
            
        </div>
    )
};