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
    src: "/twitch.svg",
    alt: 'twitch',
    link: '/'
  },
  {
    src: "/youtube.svg",
    alt: 'youtube',
    link: '/'
  },
  {
    src: "/discord.svg",
    alt: 'discord',
    link: '/'
  },
  {
    src: "/path.svg",
    alt: 'path',
    link: '/'
  },
  {
    src: "/reddit.svg",
    alt: 'reddit',
    link: '/'
  }
]
const SocialLinks = () => {
  return (
    <div className='flex gap-[30px] items-center'>
      {socialItems.map((item, idx) => (
        <div className="h-[20px] w-[25px] relative cursor-pointer" key={idx}>
          <Link href={item.link as string} >
            <Image
              src={item.src}
              alt={item.alt}
              className=""
              fill
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;