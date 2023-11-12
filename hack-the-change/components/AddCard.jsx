"use client";

import React, { useRef } from 'react'

import { initializeApp } from "firebase/app";
import { firebaseConfig } from '@/app/firebase';
const app = initializeApp(firebaseConfig);

import { getDatabase, onValue, push, ref, set } from "firebase/database";
const db = getDatabase(app);

const AddCard = ({ userObj, intermediary }) => {

  const nameRef = useRef(null);
  const plantRef = useRef(null);

  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  return (
    <div className="bg-stone-300 text-stone-700 p-2 mb-2 rounded-md">
      <h2 className="text-2xl font-medium">Add New Plant:</h2>
      <div className="flex flex-wrap">
        <input className="p-1 m-1" ref={nameRef} defaultValue={"Plant Name"}></input>
        <input className="p-1 m-1" ref={plantRef} defaultValue={"Plant Species"}></input>
        <div onClick={() => {
          const listRef = ref(db, '/');
          const newRef = push(listRef);
          set(newRef, {
              name: nameRef.current.value,
              plant: toTitleCase(plantRef.current.value),
              owner: userObj.displayName,
              height: "[Loading...]",
              email: userObj.email,
              date: new Date().toISOString().split("T")[0],
              iid: newRef.key,
              request: {
                name: "",
                email: ""
              }
          });
          intermediary();
        }} className="p-2 w-8 transition-all hover:bg-green-200 hover:cursor-pointer rounded-3xl bg-lime-200 flex flex-col justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        </div>
      </div>
    </div>
  )
}

export default AddCard