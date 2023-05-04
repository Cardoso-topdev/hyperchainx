"use client";

import React from "react";
import Image from "next/image";
import CarouselView from "../CarouselView";
import { Slide } from "pure-react-carousel";

const PlateformSlideView = () => {
  return (
    <div>
      <div className="text-electric-lime text-[20px] max-lg:text-[16px] max-xmd:text-[14px] mb-[20px] select-none font-['Industry']">
        The First all-in-one Gaming Platform!
      </div>
      <div className="text-light-grey text-[16px] max-lg:text-[14px] mb-[50px] max-lg:mb-[35px] max-xmd:mb-[25px] select-none font-['Industry']">
        Our mission is to establish the ultimate crypto gaming platform for
        gamers and investors, providing an all-in-one application that includes
        buy-in tournaments, high-stakes 1 vs. 1 battles, league creation options
        for eSport teams, game store, and more. We understand that gamers need a
        dedicated platform where they can feel at home, and we are committed to
        making that happen at HyperchainX.
      </div>
    </div>
  );
};
const GamingPlatformSection = () => {
  return (
    <section className="px-[30px]">
      <div className="max-w-[1200px] m-auto">
        <div className="text-white text-[30px] mb-[30px] font-['IntegralCF']">
          GAMING PLATFORM
        </div>
        <div className="flex flex-row-reverse bg-[rgba(22,22,22,0.7)] max-xmd:flex-col items-center">
          <div className="w-[400px] max-md:w-[350px] max-xmd:w-full h-[342px] bg-dark flex items-end justify-center shrink-0">
            <Image
              src="/platform-section-preview1.png"
              alt="Plateform preview"
              className="ml-[15px]"
              width={270}
              height={311}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="p-[50px] max-lg:p-[25px] w-[800px] h-[342px] max-lg:w-full">
            <CarouselView showPrevNextBtns={false}>
              <Slide index={0}>
                <PlateformSlideView />
              </Slide>
              <Slide index={1}>
                <PlateformSlideView />
              </Slide>
              <Slide index={2}>
                <PlateformSlideView />
              </Slide>
            </CarouselView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingPlatformSection;
