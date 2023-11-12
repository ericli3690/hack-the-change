"use client";

import React, { useEffect, useState } from 'react'
import Card from './Card'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '@/app/firebase';
const app = initializeApp(firebaseConfig);

import { getDatabase, onValue, ref } from "firebase/database";
const db = getDatabase(app);

const OtherPlants = () => {

  const [plantsData, setPlantsData] = useState([]);

  useEffect(() => {
    const plantsRef = ref(db, "/");
    onValue(plantsRef, (snapshot) => {
      let out = snapshot.val();
      out.sort((a,b) => parseInt(b.height) - parseInt(a.height));
      setPlantsData(out);
    });
  }, []);

  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-2">Local Leaderboard</h2>
      {
        plantsData.length

        ? // loaded

        plantsData.map((plantData, i) => {
          return <Card plantData={plantData} canSwap={true} key={i} />
        })

        : // hasnt loaded yet

        <p className="text-black text-center">Loading...</p>
      }
    </>
  )
}

export default OtherPlants