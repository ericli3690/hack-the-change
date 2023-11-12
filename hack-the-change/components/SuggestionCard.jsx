import React from 'react'

const SuggestionCard = ({ plantData }) => {
  return (
    <div className="bg-stone-300 text-stone-700 p-2 mb-2 rounded-md">
      <div className="flex flex-row">
        {/* left-right */}
        <img className="w-24 mr-2 border-2 border-gray-100" src={plantData.plant + ".png"} />
        <div className="flex-grow">
          {/* top-to-down on right */}
          <h2 className="text-2xl font-medium">{plantData.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default SuggestionCard