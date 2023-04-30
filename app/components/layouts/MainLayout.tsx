"use client"
import React, { ReactNode } from 'react';
import { useState } from "react";
import Header from '../Header';

const MainLayout = ({children}: {children?: ReactNode}) => {
  const [isNavDrawerOpen, toggleNavDrawer] = useState(false)
  return (
    <>
      <main className="bg-backing">
        <div className="max-w-[1200px] m-auto">
          <Header isNavDrawerOpen={isNavDrawerOpen} toggleNavDrawer={toggleNavDrawer}/>
          {children}
        </div>
      </main>
      {isNavDrawerOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-backing opacity-70 z-10 animation-overlay-fadein" onClick={() => toggleNavDrawer(!isNavDrawerOpen)}></div>
      )}
    </>
  );
};

export default MainLayout;