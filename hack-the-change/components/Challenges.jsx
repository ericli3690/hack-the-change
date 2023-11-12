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
      <div>
        <h3 className="text-center font-semibold mb-2 text-xl" >Nearby Plant Stores</h3>
        <div className="rounded-md border-8 border-stone-300" style={{overflow:"hidden",resize:"none",maxWidth:"100%",height:"500px"}}><div id="g-mapdisplay" style={{height:"100%", width:"100%", border: 0}}><iframe style={{height:"100%", width:"100%", maxWidth:"100%"}} src="https://www.google.com/maps/embed/v1/search?q=plant+stores&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a href="https://kbj9qpmy.com/bp" id="make-map-data">Internet Provider</a></div>
      </div>
    </>
  )
}

export default Challenges