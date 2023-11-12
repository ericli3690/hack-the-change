"use client";

import React, { useEffect, useState } from 'react'
import Card from './Card'

const MyPlants = () => {

  const [plantData, setPlantData] = useState({
    name: "Tommy the Tomato",
    plant: "Tomato",
    height: "[Loading...]",
    date: "09-11-2023",
    age: "2",
    owner: "Me"
  });

  const getData = (endpoint, callback) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        callback(request.response);
      }
    };
    request.open("GET", endpoint);
    request.send();
  }

  const updateHeight = (_height) => {
    setPlantData({...plantData, height: _height})
  }

  useEffect(() => {
    getData("http://localhost:8000", updateHeight);
  }, [plantData]);

  return (
    <>
      <Card plantData={plantData} />
    </>
  )
}

export default MyPlants