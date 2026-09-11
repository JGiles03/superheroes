import React from "react"
import { useSelected } from "../../contexts"
import { useTeam } from "../../contexts"

export default function DetailCard() {
    const { selectedData } = useSelected()

    const {teamData, setTeamData} = useTeam()

    const addToTeam = () => {
        if(teamData.length === 6){
            teamData.shift()
        }
        //check if duplicate hero
        teamData.push(selectedData)
        setTeamData(teamData)
    }

    return (
        <div>
            <h2>{selectedData.name}</h2>
            <img src={selectedData.images.md}></img>
            <div className="bio">
                <h3>Biography</h3>
                <p>Full Name: {selectedData.biography.fullName || "Unknown"}</p>
                <p>Birth Place: {selectedData.biography.placeOfBirth}</p>
                <p>First Appearance: {selectedData.biography.firstAppearance}</p>
                <p>Series: {selectedData.biography.publisher}</p>
            </div>
            <div className="stats">
                <h3>Stats</h3>
                <p>Intelligence: {selectedData.powerstats.intelligence || 0}</p>
                <p>Strength: {selectedData.powerstats.strength || 0}</p>
                <p>Speed: {selectedData.powerstats.speed || 0}</p>
                <p>Durability: {selectedData.powerstats.durability || 0}</p>
                <p>Power: {selectedData.powerstats.power || 0}</p>
                <p>Combat: {selectedData.powerstats.combat || 0}</p>
            </div>
            <button onClick={addToTeam} >Add to team</button>
            {/* make button looked clicked if hero is in team list */}
            
        </div>
    )
}