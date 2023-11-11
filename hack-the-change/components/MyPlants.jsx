import React from 'react'
import Card from './Card'

const MyPlants = () => {
  return (
    <>
      <Card plantData={{
        name: "Tommy the Tomato",
        plant: "Tomato",
        height: 6,
        date: "09-11-2023",
        age: 2,
        owner: "Me"
      }} />
      <Card plantData={{
        name: "Tommy the Tomato",
        plant: "Tomato",
        height: 6,
        date: "09-11-2023",
        age: 2,
        owner: "Me"
      }} />
    </>
  )
}

export default MyPlants