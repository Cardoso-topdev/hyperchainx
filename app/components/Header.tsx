"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { DropDownIcon } from './icons/DropDownIcon';

const Header = ({ isNavDrawerOpen, toggleNavDrawer }: { isNavDrawerOpen: boolean, toggleNavDrawer: Function }) => {
  const navDrawerClsNameExt = isNavDrawerOpen ? 'right-0 shadow-[-15px_0_64px_0_rgba(163,255,18,0.15)]' : 'right-[-300px]'
  const hamburgerSpan1ClsNameExt = isNavDrawerOpen ? 'opacity-0 ' : ''
  const hamburgerSpan2ClsNameExt = isNavDrawerOpen ? '-rotate-45 translate-x-[5px] translate-y-[10px]' : ''
  const hamburgerSpan3ClsNameExt = isNavDrawerOpen ? 'rotate-45 translate-x-[4px] translate-y-[-12px]' : ''
  return (
    <>
      <div className='h-[100px] border-dark-grey border-0 border-b-[1px] w-full m-0 py-[30px] flex justify-between items-center'>
        <div className="relative flex-1 justify-start">
          <div className="w-[240px] h-[40px] max-sm:w-full relative ">
            <Link href="/" >
              <Image
                src="/logo.svg"
                alt="Hyper Chain X Logo"
                className="max-xmd:hidden"
                fill
                priority
                style={{objectFit:"contain"}}
              />
              <Image
                src="/logo-mobile.png"
                alt="Hyper Chain X Logo"
                className="xmd:hidden"
                width={60}
                height={47}
                priority
                style={{objectFit:"contain"}}
              />
            </Link>
          </div>
        </div>
        <div className='w-[20px] h-[20px] cursor-pointer z-30 xmd:hidden' onClick={() => toggleNavDrawer(!isNavDrawerOpen)}>
          <span className={`relative block w-[24px] h-[2px] mb-[7px] bg-white z-30 transition  origin-[0%_0%] ${hamburgerSpan1ClsNameExt}`}></span>
          <span className={`relative block w-[24px] h-[2px] mb-[7px] bg-white z-30 transition  origin-[0%_100%] ${hamburgerSpan2ClsNameExt}`}></span>
          <span className={`relative block w-[24px] h-[2px] mb-[7px] bg-white z-30 transition  origin-[4px_0px] ${hamburgerSpan3ClsNameExt}`}></span>
        </div>
        <div className='flex gap-[30px] items-center flex-1 justify-end max-xmd:hidden'>
          <Link href="/" passHref={true}>
            <div className="uppercase h-[100px] border-b-[1px] border-electric-lime flex items-center">Start</div>
          </Link>
          <Link href="/" passHref={true}>
            <div className="uppercase">Team</div>
          </Link>
          <Link href="/" passHref={true}>
            <div className="uppercase">WhitePaper</div>
          </Link>
          <Link href="/" passHref={true}>
            <div className="uppercase flex items-center">
              <Image
                src="/audit_icon.webp"
                alt="audit"
                className="mt-[-2px]"
                width={23}
                height={23}
                priority
                style={{objectFit:"contain"}}
              />
              <div className="ml-[6px]">Audit</div>
            </div>
          </Link>
          <Link href="/" passHref={true}>
            <div className="uppercase flex items-center">
              <Image
                src="/lang.png"
                alt="audit"
                className="mt-[-2px]"
                width={23}
                height={23}
                priority
                style={{objectFit:"contain"}}
              />
              <div className="mx-[6px]">En</div>
              <DropDownIcon />
            </div>
          </Link>
        </div>
      </div>
      <div className={`fixed top-0 w-[300px] ${navDrawerClsNameExt} h-[100vh] bg-black z-20 transition transition-all duration-300 ease-in-out flex items-center`}>
        <div className="absolute h-[100px] top-0 left-[15px] flex items-center ">
          <Link href="/" passHref={true}>
            <div className="uppercase flex items-center">
              <Image
                src="/logo-title.png"
                alt="mobile"
                className="mt-[-2px]"
                width={212}
                height={16}
                priority
                style={{objectFit:"contain"}}
              />
            </div>
          </Link>
        </div>
        <div className='ml-[50px] flex gap-[60px] flex-col'>
          <Link href="/" passHref={true}>
            <div className="uppercase flex">
              <div className="mr-[20px]">Start</div>
              <Image
                src="/drawer-nav-right.png"
                alt="audit"
                className="mt-[-2px]"
                width={23}
                height={23}
                priority
                style={{objectFit:"contain"}}
              />
            </div>
          </Link>
          <Link href="/" passHref={true}>
            <div className="uppercase flex">
              <div className="mr-[20px]">Team</div>
              <Image
                src="/drawer-nav-right.png"
                alt="audit"
                className="mt-[-2px]"
                width={23}
                height={23}
                priority
                style={{objectFit:"contain"}}
              />
            </div>
          </Link>
          <Link href="/" passHref={true}>
            <div className="uppercase flex">
              <div className="mr-[20px]">WhitePaper</div>
              <Image
                src="/drawer-nav-right.png"
                alt="audit"
                className="mt-[-2px]"
                width={23}
                height={23}
                priority
                style={{objectFit:"contain"}}
              />
            </div>
          </Link>
          <Link href="/" passHref={true}>
            <div className="uppercase flex items-center">
              <Image
                src="/audit_icon.webp"
                alt="audit"
                className="mt-[-2px]"
                width={23}
                height={23}
                priority
                style={{objectFit:"contain"}}
              />
              <div className="ml-[6px]">Audit</div>
            </div>
          </Link>
        </div>
        <div className="absolute right-[30px] bottom-[30px]">
          <Link href="/" passHref={true}>
            <div className="uppercase flex items-center">
              <Image
                src="/lang.png"
                alt="audit"
                className="mt-[-2px]"
                width={23}
                height={23}
                priority
                style={{objectFit:"contain"}}
              />
              <div className="mx-[6px]">En</div>
              <DropDownIcon />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
