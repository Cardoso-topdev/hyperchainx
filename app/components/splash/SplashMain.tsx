import React from 'react';

const PlatformItem = ({ title, imgSrc }: { title: string, imgSrc: string }) => {
  return <div className={`flex-1 h-full ${imgSrc} bg-cover flex justify-end 3xl:flex-col uppercase cursor-pointer hover:shadow-[inset_0_0_100px_0_rgba(163,255,18,0.1)] hover:border-[1px] hover:border-electric-lime group transition duration-700 ease-in-out`}>
    <div className="h-[100px] justify-center items-center flex text-[30px] cursor-pointer border-dark-grey border-t-[1px] backdrop-blur-[15px] group-hover:bg-electric-lime group-hover:text-black transition duration-700 ease-in-out max-3xl:w-[200px] max-3xl:h-full max-sm:w-[122px] max-md:text-[20px]">{title}</div>
  </div>
}
const SplashMain = () => {
  return (
    <div className='flex h-[calc(100vh-100px)] max-3xl:flex-col'>
      <PlatformItem title='NFT' imgSrc='bg-nft-bk-img' />
      <PlatformItem title='Project' imgSrc='bg-project-bk-img' />
      <PlatformItem title='Gaming' imgSrc='bg-gaming-bk-img' />
    </div>
  );
};

export default SplashMain;