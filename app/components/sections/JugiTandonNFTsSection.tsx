'use client'

import React from 'react';
import Image from 'next/image'
import { Slide } from 'pure-react-carousel';
import CarouselView from '../CarouselView';

const JugiTandonNFTsSection = () => {
  return (
    <section className='bg-dark'>
      <div className="max-w-[1200px] m-auto">
        <div className="flex py-[100px] gap-[65px]">
          <div className="flex shrink-0 w-[415px]">
            <CarouselView showPrevNextBtns={false} isDotCenter={true}>
              <Slide index={0}>
                <Image
                  src="/jugi-tandon-nfts-preview.png"
                  alt="Jugi Tandon NFTs"
                  className="mb-[30px]"
                  width={415}
                  height={604}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Slide>
              <Slide index={1}>
                <Image
                  src="/jugi-tandon-nfts-preview.png"
                  alt="Jugi Tandon NFTs"
                  className="mb-[30px]"
                  width={415}
                  height={604}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Slide>
              <Slide index={2}>
                <Image
                  src="/jugi-tandon-nfts-preview.png"
                  alt="Jugi Tandon NFTs"
                  className="mb-[30px]"
                  width={415}
                  height={604}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Slide>
            </CarouselView>
          </div>
          <div className="w-full">
            <div className="flex justify-between w-full">
              <div className="text-pale text-[30px]">JUGI TANDON NFTS</div>
              <button type="button" className='bg-dark-grey px-[15px] py-[8px] text-electric-lime flex items-center'>
                <span>Read more</span>
                <Image
                  src="/arrow-right.svg"
                  alt="arrow right"
                  className="ml-[15px]"
                  width={14}
                  height={14}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </button>
            </div>
            <div className="text-electric-lime mt-[10px] text-[20px] mb-[30px]">The Untold Story of a Tech Legend</div>
            <div className="text-light-grey whitespace-pre-line">{`Introducing the limited edition “Jugi Tandon” NFT collection - a tribute to the pioneering legacy of one of the computer industry's greatest minds. With only 10,000 NFTs available in seven different tiers, each mystery box contains a unique piece of digital history for just $250 BUSD. 

And that's not all. We're excited to announce that a documentary about Jugi Tandon is currently being pitched to Netflix as a potential pilot to highlight his groundbreaking achievements in the digital revolution. 

Jugi Tandon - the inventor of the Double-Sided Floppy Drive in the 80s - was a top player in the disk-drive industry and even named Forbes' "Up and Comer of the Year." With his wealth, he built an impressive 30-room home on 20 acres in Chatsworth. 

But more than just amassing considerable riches, Jugi's technological breakthroughs laid the foundation for the likes of cloud computing, blockchain, and storage capabilities in computing. He worked alongside giants like Steve Jobs and Bill Gates and even contributed to IBM's success as their sole supplier. 

Don't miss your chance to own a piece of Jugi Tandon's unparalleled legacy. Order your mystery box today!`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JugiTandonNFTsSection;
