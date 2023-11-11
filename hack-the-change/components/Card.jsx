import React from 'react'

const Card = ({ plantData }) => {
  return (
    <div className="bg-stone-300 text-stone-600 p-2 mb-2">
      <div className="flex flex-row ">
        {/* left-right */}
        <img className="w-24 mr-2 border-2 border-gray-100" src="tomato.png" />
        <div>
          {/* top-to-down on right */}
          <h2 className="text-2xl font-medium">{plantData.name}</h2>
          <h3 className="text-xs">Plant: {plantData.plant}</h3>
          <h3 className="text-xs">Height: {plantData.height}cm</h3>
          <h3 className="text-xs">Planting Date: {plantData.date}</h3>
          <h3 className="text-xs">Age: {plantData.age} days</h3>
          <h3 className="text-xs">Owner: {plantData.owner}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card