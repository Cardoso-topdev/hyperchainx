"use client"
import React, { ReactNode } from 'react';
import { useState } from "react";
import Header from '../Header';

const MainLayout = ({ children }: { children?: ReactNode }) => {
  const [isNavDrawerOpen, toggleNavDrawer] = useState(false)
  return (
    <>
      <header className='flex justify-center '>
        <div className="max-w-[1200px] max-xmd:mx-[20px] mx-[40px] w-full">
          <Header isNavDrawerOpen={isNavDrawerOpen} toggleNavDrawer={toggleNavDrawer} />
        </div>
      </header>
      <main className='mb-[20px]'>
        {children}
      </main>
      {isNavDrawerOpen && (
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-backing opacity-70 z-10 animation-overlay-fadein" onClick={() => toggleNavDrawer(!isNavDrawerOpen)}></div>
      )}
    </>
  );
};

export default MainLayout;