"use client";

import Challenges from "@/components/Challenges";
import MyPlants from "@/components/MyPlants";
import NavButton from "@/components/NavButton";
import Navbar from "@/components/Navbar";
import OtherPlants from "@/components/OtherPlants";
import ThirdShell from "@/components/ThirdShell";
import { useState } from "react";

export default function Home() {

  const [screen, setScreen] = useState(0);

  const changeScreen = (isToRight) => {
    let currentScreen = screen;
    isToRight ? currentScreen++ : currentScreen--;
    (currentScreen == -1) && (currentScreen = 2);
    (currentScreen == 3) && (currentScreen = 0);
    setScreen(currentScreen);
    console.log(currentScreen);
  }

  const screenComponent = () => {
    switch (screen) {
      case 0:
        return (<MyPlants />);
      case 1:
        return (<OtherPlants />);
      case 2:
        return (<Challenges />);
    }
  }

  return (
    <main className="bg-gray-100 flex flex-col min-h-screen">
      <Navbar />
      <ThirdShell>
        {screenComponent()}
      </ThirdShell>
      <div className="flex flex-row m-2">
        <NavButton className="bg-gradient-to-r from-lime-200 to-green-200" clickFunc={() => {
          changeScreen(false);
        }}>
          <svg className="p-3 ml-2" fill="#84cc16" xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </NavButton>
        <NavButton className="flex justify-end bg-gradient-to-r from-green-200 to-lime-200" clickFunc={() => {
          changeScreen(true);
        }}>
          <svg className="p-3 mr-2" fill="#84cc16" xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        </NavButton>
      </div>
    </main>
  )
}
