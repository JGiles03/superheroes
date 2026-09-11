import React from "react"
import { AllHeroes } from "../../components"

export default function SearchPage() {
  return (
    <div className="page"> 
        <h1>List of Heroes</h1>
        <div className="herolist">
          <AllHeroes />
        </div>
    </div>
  )
}
