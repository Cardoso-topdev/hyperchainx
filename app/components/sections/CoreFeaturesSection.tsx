import React from 'react';
import Image from 'next/image'

const CoreFeaturesSection = () => {
  return (
    <section>
      <div className="max-w-[1200px] m-auto">
        <div className="text-pale text-[30px] mt-[150px] mb-[50px] text-center">THE CORE FEATURES</div>
        <div className="flex gap-[40px]">
          <div className="bg-dark w-[270px] h-[384px] flex flex-col items-center p-[20px] pt-[30px]">
            <Image
              src="/feature-nfts.png"
              alt="arrow right"
              className=""
              width={60}
              height={60}
              priority
              style={{ objectFit: "contain" }}
            />
            <div className="text-white uppercase text-[24px] font-bold">NFTs</div>
            <div className="text-light-grey text-[16px] my-[15px] text-center">Buy mystery boxes or trade hot NFTs on our Launchpad & marketplace.</div>
            <div className="text-light-grey text-[16px] text-center">Collaborations with gaming studios, eSporters, gamer girls & historical events connected to gaming hosting their NFT collections.</div>
          </div>
          <div className="bg-dark w-[270px] h-[384px] flex flex-col items-center p-[20px] pt-[30px]">
            <Image
              src="/feature-play.png"
              alt="arrow right"
              className=""
              width={60}
              height={60}
              priority
              style={{ objectFit: "contain" }}
            />
            <div className="text-white uppercase text-[24px] font-bold">PLAY TO EARN</div>
            <div className="text-light-grey text-[16px] my-[15px] text-center">Earn <span className='text-electric-lime'>$HYPER</span> by participating in our online buy-in tournaments, high-stake 1 v 1 battles, or playing crypto games.</div>
          </div>
          <div className="bg-dark w-[270px] h-[384px] flex flex-col items-center p-[20px] pt-[30px]">
            <Image
              src="/feature-game-store.png"
              alt="arrow right"
              className=""
              width={60}
              height={60}
              priority
              style={{ objectFit: "contain" }}
            />
            <div className="text-white uppercase text-[24px] font-bold">GAME STORE</div>
            <div className="text-light-grey text-[16px] my-[15px] text-center">Explore our game store for the hottest play-to-earn crypto and gambling games.</div>
            <div className="text-light-grey text-[16px] text-center">Some games developed by HyperchainX, others by our partner studios.</div>
          </div>
          <div className="bg-dark w-[270px] h-[384px] flex flex-col items-center p-[20px] pt-[30px]">
            <Image
              src="/feature-live-stream.png"
              alt="arrow right"
              className=""
              width={60}
              height={60}
              priority
              style={{ objectFit: "contain" }}
            />
            <div className="text-white uppercase text-[24px] font-bold">LIVE STREAMS</div>
            <div className="text-light-grey text-[16px] my-[15px] text-center">Stream or watch any game on our app.</div>
            <div className="text-light-grey text-[16px] text-center">Streamers can monetize their content and receive $HYPER donations and gifts.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;