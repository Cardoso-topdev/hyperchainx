"use client"
import { useState } from "react";
import Header from "./components/Header";

export default function Home() {
  const [isNavDrawerOpen, toggleNavDrawer] = useState(false)
  return (
    <>
      <main className="bg-backing">
        <div className="max-w-[1200px] m-auto">
          <Header isNavDrawerOpen={isNavDrawerOpen} toggleNavDrawer={toggleNavDrawer}/>
        </div>
      </main>
      {isNavDrawerOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-backing opacity-70 z-10 animation-overlay-fadein" onClick={() => toggleNavDrawer(!isNavDrawerOpen)}></div>
      )}
    </>
  )
}


// position: fixed;
// top: 0;
// left: 0;
// width: 100vw;
// height: 100vh;
// background: rgba($dark, 0.8);
// z-index: $z-overlay;
// animation: fadeIn .3s ease-in-out;
