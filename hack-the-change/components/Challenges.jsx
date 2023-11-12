import React from 'react'
import SuggestionCard from './SuggestionCard'

const Challenges = () => {
  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-2">Challenges</h2>
      <SuggestionCard canSwap={false} plantData={{
        name: "Try Growing Cucumber!",
        plant: "Cucumber"
      }} />
      <SuggestionCard canSwap={false} plantData={{
        name: "Try Growing Thyme!",
        plant: "Thyme"
      }} />
    </>
  )
}

export default Challenges