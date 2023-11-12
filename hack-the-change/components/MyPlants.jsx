"use client";

import React, { useEffect, useState } from 'react'
import Card from './Card'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '@/app/firebase';
const app = initializeApp(firebaseConfig);

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

import { getDatabase, onValue, ref } from "firebase/database";
const db = getDatabase(app);

const MyPlants = () => {

  const [user, setUser] = useState(null);
  const [openHandled, setOpenHandled] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    const plantsRef = ref(db, "/");
    onValue(plantsRef, (snapshot) => {
      snapshot.val().forEach(v => {
        (v.owner == user.displayName) && setPlantData(v);
      })
    })
    setOpenHandled(true);
  }, [user])

  const [plantData, setPlantData] = useState({});

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

  const updateDynamics = (_height) => {
    setPlantData({
      ...plantData,
      height: Math.round(_height),
      // age: (Math.round((new Date() - new Date(plantData.date))/(24 * 60 * 60 * 1000))).toString()
    });
  }

  useEffect(() => {
    if (openHandled) getData("http://localhost:8000", updateDynamics);
  }, [plantData]);

  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-2">My Plants</h2>
      {
        user

        ?

        <Card plantData={plantData} canSwap={false} />

        :

        <div className="text-center font-semibold bg-lime-200 rounded-md p-2" onClick={() => {
          signInWithPopup(auth, provider);
        }}>Sign In</div>
      }
      
    </>
  )
}

export default MyPlants