"use client";

import React, { useState } from 'react'

const Card = ({ plantData, canSwap }) => {
  
  const [swap, setSwap] = useState(false);
  
  return (
    <div className="bg-stone-300 text-stone-700 p-2 mb-2 rounded-md">
      <div className="flex flex-row">
        {/* left-right */}
        <img className="w-24 mr-2 border-2 border-gray-100" src={plantData.plant + ".png"} />
        <div className="flex-grow">
          {/* top-to-down on right */}
          <h2 className="text-2xl font-medium">{plantData.name}</h2>
          <h3 className="text-xs">Plant: {plantData.plant}</h3>
          <h3 className="text-xs">Height: {plantData.height}mm</h3>
          <h3 className="text-xs">Planting Date: {plantData.date}</h3>
          {/* <h3 className="text-xs">Age: {plantData.age} days</h3> */}
          <h3 className="text-xs">Owner: {plantData.owner}</h3>
        </div>
        {canSwap && <div onClick={() => {setSwap(true)}} className="p-2 transition-all hover:bg-green-200 hover:cursor-pointer rounded-3xl bg-lime-200 flex flex-col justify-center">
          {
          swap
          
          ?

          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>

          :
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="#44403c" height="1em" viewBox="0 0 512 512"><path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg>
          }
        </div>}
      </div>
    </div>
  )
}

export default Card