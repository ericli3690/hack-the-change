"use client";

import React, { useEffect, useState } from 'react'
import Card from './Card'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '@/app/firebase';
const app = initializeApp(firebaseConfig);

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

import { getDatabase, onValue, ref, set } from "firebase/database";
import AddCard from './AddCard';
const db = getDatabase(app);

const MyPlants = () => {

  const [user, setUser] = useState(null);
  const [newAdded, setNewAdded] = useState(0);
  const [plantsData, setPlantsData] = useState([]);
  const [intermediatePlantsData, setIntermediatePlantsData] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user && setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    let out = [];
    const plantsRef = ref(db, "/");
    onValue(plantsRef, (snapshot) => {
      Object.values(snapshot.val()).forEach(v => {
        (v.owner == user.displayName) && out.push(v);
      })
      setIntermediatePlantsData(out)
    })
  }, [user, newAdded]);

  const pushBack = (specificPlantsData) => {
    specificPlantsData.forEach((plantData) => {
      set(ref(db, plantData.iid.toString()), {
        ...plantData
      });
    });
  }

  useEffect(() => {
    if (!intermediatePlantsData.length) return;
    getData("http://localhost:8000", (_height) => {
      let checkout = intermediatePlantsData;
      checkout.forEach((plantData, i) => {
        checkout[i] = {...plantData, height: Math.round(_height)}
      })
      // age: (Math.round((new Date() - new Date(plantData.date))/(24 * 60 * 60 * 1000))).toString()
      setPlantsData(checkout);
      setTimeout(() => {
        pushBack(checkout);
      }, 5000);
      // pushBack(checkout);
      // console.log(checkout);
    });
  }, [intermediatePlantsData]);

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

  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-2">My Plants</h2>
      {
        user

        ?

        // <>
        //   {
        //     user
    
        //     ?
    
        //     <>
        //       {plantsData.map((plantData, i) => {
        //         return <Card plantData={plantData} canSwap={false} key={i} />
        //       })}
        //       <AddCard userObj={user} intermediary={() => {setNewAdded(newAdded+1)}} />
        //     </>
            
    
        //     :
    
        //     <p className="text-black text-center">Loading...</p>
        //   }
        // </>

        <>
          {plantsData.map((plantData, i) => {
            return <Card plantData={plantData} canSwap={false} intermediary={() => {setNewAdded(newAdded+1)}} key={i} />
          })}
          <AddCard userObj={user} intermediary={() => {setNewAdded(newAdded+1)}} />
        </>

        :

        <div className="hover:cursor-pointer text-center font-semibold bg-lime-200 rounded-md p-2" onClick={() => {
          signInWithPopup(auth, provider);
        }}>Sign In</div>

      }
    </>
  )
}

export default MyPlants