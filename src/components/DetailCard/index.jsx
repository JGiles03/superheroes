import React from "react"
import { useSelected } from "../../contexts"

export default function DetailCard() {
    const { selectedData } = useSelected()

    return (
        <div>
            <h2>{selectedData.name}</h2>
            <img src={selectedData.images.md}></img>
        </div>
    )
}
