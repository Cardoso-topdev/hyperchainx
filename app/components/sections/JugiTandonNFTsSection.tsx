"use client";

import React from "react";
import Image from "next/image";
import { Slide } from "pure-react-carousel";
import CarouselView from "../CarouselView";

const JugiTandonNFTsSection = () => {
  return (
    <section className="bg-dark px-[30px]">
      <div className="max-w-[1200px] m-auto">
        <div className="lg:hidden flex justify-between w-full max-lg:pt-[75px] max-sm:justify-center">
          <div className="text-pale text-[30px] max-lg:text-[24px] font-['IntegralCF']">
            JUGI TANDON NFTS
          </div>
          <button
            type="button"
            className="max-sm:hidden bg-dark-grey px-[15px] py-[8px] text-electric-lime flex items-center"
          >
            <span>Read more</span>
            <Image
              src="/read-more-arrow.webp"
              alt="arrow right"
              className="ml-[15px]"
              width={14}
              height={14}
              priority
              style={{ objectFit: "contain" }}
            />
          </button>
        </div>
        <div className="lg:hidden text-electric-lime mt-[10px] text-[20px] max-lg:text-[16px] mb-[30px] font-['Industry'] text-center">
          The Untold Story of a Tech Legend
        </div>
        <div className="flex pb-[100px] max-sm:pb-[30px] pt-[100px] max-lg:pt-[30px] gap-[65px] max-lg:gap-[30px] max-sm:flex-col items-center">
          <div className="flex shrink-0 w-[415px] max-lg:w-[300px]">
            <CarouselView showPrevNextBtns={false} isDotCenter={true}>
              <Slide index={0}>
                <Image
                  src="/jugi-tandon-nfts-preview.png"
                  alt="Jugi Tandon NFTs"
                  width={415}
                  height={604}
                  className="max-lg:w-[300px] max-lg:h-[436px] mb-[30px]"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Slide>
              <Slide index={1}>
                <Image
                  src="/jugi-tandon-nfts-preview.png"
                  alt="Jugi Tandon NFTs"
                  width={415}
                  height={604}
                  className="max-lg:w-[300px] max-lg:h-[436px] mb-[30px]"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Slide>
              <Slide index={2}>
                <Image
                  src="/jugi-tandon-nfts-preview.png"
                  alt="Jugi Tandon NFTs"
                  width={415}
                  height={604}
                  className="max-lg:w-[300px] max-lg:h-[436px] mb-[30px]"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Slide>
            </CarouselView>
          </div>
          <div className="w-full">
            <div className="max-lg:hidden flex justify-between w-full">
              <div className="text-pale text-[30px] font-['IntegralCF']">
                JUGI TANDON NFTS
              </div>
              <button
                type="button"
                className="bg-dark-grey px-[15px] py-[8px] text-electric-lime flex items-center"
              >
                <span>Read more</span>
                <Image
                  src="/read-more-arrow.webp"
                  alt="arrow right"
                  className="ml-[15px]"
                  width={14}
                  height={14}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </button>
            </div>
            <div className="max-lg:hidden text-electric-lime mt-[10px] text-[20px] mb-[30px] font-['Industry']">
              The Untold Story of a Tech Legend
            </div>
            <div className="text-light-grey whitespace-pre-line max-lg:text-[12px] font-['Industry']">{`Introducing the limited edition “Jugi Tandon” NFT collection - a tribute to the pioneering legacy of one of the computer industry's greatest minds. With only 10,000 NFTs available in seven different tiers, each mystery box contains a unique piece of digital history for just $250 BUSD. 

And that's not all. We're excited to announce that a documentary about Jugi Tandon is currently being pitched to Netflix as a potential pilot to highlight his groundbreaking achievements in the digital revolution. 

Jugi Tandon - the inventor of the Double-Sided Floppy Drive in the 80s - was a top player in the disk-drive industry and even named Forbes' "Up and Comer of the Year." With his wealth, he built an impressive 30-room home on 20 acres in Chatsworth. 

But more than just amassing considerable riches, Jugi's technological breakthroughs laid the foundation for the likes of cloud computing, blockchain, and storage capabilities in computing. He worked alongside giants like Steve Jobs and Bill Gates and even contributed to IBM's success as their sole supplier. 

Don't miss your chance to own a piece of Jugi Tandon's unparalleled legacy. Order your mystery box today!`}</div>
          </div>
        </div>
        <div className="sm:hidden max-sm:pb-[50px] ">
          <button
            type="button"
            className="bg-dark-grey px-[15px] py-[8px] text-electric-lime flex items-center"
          >
            <span>Read more</span>
            <Image
              src="/read-more-arrow.webp"
              alt="arrow right"
              className="ml-[15px]"
              width={14}
              height={14}
              priority
              style={{ objectFit: "contain" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JugiTandonNFTsSection;
