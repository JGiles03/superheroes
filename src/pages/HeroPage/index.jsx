import React, { useEffect } from "react"
import { DetailCard } from "../../components"
import { useParams } from "react-router-dom"
import { useSelected } from "../../contexts"

export default function HeroPage() {
  const {id} = useParams()
  const {selectedData, setSelectedData} = useSelected()

  useEffect(() => {
    const getHero = async () => {

    const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    const data = await response.json();
    setSelectedData(data)
    }
    getHero()
  }, [])

  return (
    <div className="page">
        {selectedData.name ? <DetailCard /> : ""}
    </div>
  )
}
