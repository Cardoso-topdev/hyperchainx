import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const socialItems = [
  {
    src: "/discord.svg",
    alt: 'discord',
    link: 'https://discord'
  },
  {
    src: "/telegram.svg",
    alt: 'telegram',
    link: '/'
  },
  {
    src: "/twitter.svg",
    alt: 'twitter',
    link: '/'
  },
  {
    src: "/discord.svg",
    alt: 'discord',
    link: '/'
  },
  {
    src: "/discord.svg",
    alt: 'discord',
    link: '/'
  },
  {
    src: "/discord.svg",
    alt: 'discord',
    link: '/'
  },
  {
    src: "/discord.svg",
    alt: 'discord',
    link: '/'
  },
  {
    src: "/discord.svg",
    alt: 'discord',
    link: '/'
  }
]
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
              objectFit='contain'
            />
          </Link>
        </div>
      </div>
      <span className="max-3xl:hidden text-[26px] leading-extra-tight text-center uppercase flex-1">
        The next-gen gaming platform
      </span>
      <div className='flex gap-[30px] items-center flex-1 justify-end max-sm:hidden'>
        {socialItems.map((item, idx) => (
          <div className="h-[20px] w-[25px] relative cursor-pointer" key={idx}>
            <Link href={item.link as string} >
              <Image
                src={item.src}
                alt={item.alt}
                className=""
                fill
                objectFit='contain'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplashHeader;