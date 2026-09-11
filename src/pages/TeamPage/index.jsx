import React, { useEffect } from "react"
import { TeamList } from "../../components"
import { useTeam } from "../../contexts"

let intelligence
let strength
let speed
let durability
let power
let combat

export default function Teampage() {
  const {teamData} = useTeam()

    useEffect(() => {
      const statCalc = () => {

        intelligence = 0
        strength = 0
        speed = 0
        durability = 0
        power = 0
        combat = 0

        for (const hero of teamData){
          intelligence += hero.powerstats.intelligence
          strength += hero.powerstats.strength
          speed += hero.powerstats.speed
          durability += hero.powerstats.durability
          power += hero.powerstats.power
          combat += hero.powerstats.combat
        }
      }
      statCalc()
    }, [])
  
  

  return (
    <div>
        <h1>Team Page</h1>
        <div className="teamstats">
          <h3>Total Stats</h3>
          <p>Intelligence: {intelligence || ""}</p>
          <p>Strength: {strength}</p>
          <p>Speed: {speed}</p>
          <p>Durability: {durability}</p>
          <p>Power: {power}</p>
          <p>Combat: {combat}</p>
        </div>
        <TeamList />
    </div>
  )
}
