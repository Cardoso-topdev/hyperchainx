import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import SocialLinks from '../SocialLinks';

const SplashHeader = () => {
  return (
    <div className='h-[100px] border border-backing w-full m-0 py-[30px] px-[40px] flex justify-between'>
      <div className="relative flex-1 justify-start">
        <div className="w-[240px] h-[40px] max-sm:w-full relative ">
          <Link href="/" >
            <Image
              src="/logo.png"
              alt="Hyper Chain X Logo"
              className=""
              fill
              priority
              style={{objectFit:"contain"}}
            />
          </Link>
        </div>
      </div>
      <span className="max-3xl:hidden text-[26px] leading-extra-tight text-center uppercase flex-1">
        The next-gen gaming platform
      </span>
      <div className="flex-1 flex justify-end max-sm:hidden">
        <SocialLinks />
      </div>
    </div>
  );
};

export default SplashHeader;