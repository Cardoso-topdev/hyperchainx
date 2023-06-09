import React from "react";

const DigitalArtMuseumSection = () => {
  return (
    <section className="bg-[#111] pb-[100px] px-[30px]">
      <div className="max-w-[1200px] m-auto">
        <div className="flex gap-[65px] max-lg:gap-[30px] items-center max-xmd:flex-col">
          <div className="xmd:hidden text-[30px] max-lg:text-[24px] text-pale font-['IntegralCF']">
            DIGITAL ART MUSEUM
          </div>
          <div className="bg-[#232323] w-[500px] max-lg:w-[380px] h-[258px] max-lg:h-[273px] shrink-0"></div>
          <div className="">
            <div className="max-xmd:hidden text-[30px] max-lg:text-[24px] text-pale font-['IntegralCF']">
              DIGITAL ART MUSEUM
            </div>
            <div className="text-[16px] max-lg:text-[14px] text-light-grey mt-[10px] font-['Industry']">{`Experience the power of gaming history in your hands! Delve into a world of legendary tech pioneers who paved the way for the gaming industry, iconic games that left a lasting impact, and unforgettable characters that stole our hearts. With HyperchainX - the pioneering NFT marketplace in gaming - you can now own a piece of this glorious heritage. Our digital art museum and auction house offer unmatched access to gaming's most prized possessions, lovingly enshrined on the unstoppable blockchain. Marvel at the stunning artwork and pay tribute to the visionaries who made it all possible - forever etched in history for generations to come!`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalArtMuseumSection;
