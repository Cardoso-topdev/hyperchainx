import React from "react";
import Image from "next/image";

const phase1 = [
  "UI Design FT Marketplace",
  "NFT Marketplace Development",
  "Inphantry Assigned for First Phase Gaming-Platform",
  "Press Release of NFT Presale with Jugi Tandon",
  "Hypertron NFT Design Presentation",
  "NFT Launchpad Development",
  "Mystery Boxes Creation",
  "Affiliate Program Development",
  "Research and Analytics",
  "Telegram-Groups Marketing",
];
const phase2 = [
  "KYC and Audit",
  "Pinksale SAFU Contract",
  "Pinksale Fair Launch",
  "Twitter Influencers Marketing",
  "Youtubers Marketing",
  "Pancakeswap Launch",
  "NFT Marketplace/Launchpad TESTING",
  "CEX Listings",
  "Coinmarketcap and Coingecko Listing",
  "CERTIK audit, KYC + Skynet",
];
const phase3 = [
  "NFT Marketplace/Launchpad LAUNCH",
  "Gaming Partnerships",
  "Hypertrons Collection Whitelist Phase",
  "Hypertrons Collection Presale",
  "CEX Listing Tier 1",
  "Jugi Tandon Trailer + Marketing",
  "Jugi Tandon Whitelist Phase",
  "Netflix Documentary Pilot",
  "NFT Staking (Hypertron Collection)",
  "Jugi Tandon FT Presale",
  "NYC Times Square Billboard",
  "Real Life Gaming Event",
  "Crypto Expo Stand",
];
const RoadMapSection = () => {
  return (
    <section className="pt-[100px] pb-[40px]">
      <div className="max-w-[1200px] m-auto">
        <div className="text-pale text-[30px] text-center mb-[60px]">
          ROADMAP
        </div>
        <div className="flex border-dark-grey border-b-[4px]">
          <div className="flex-1 flex justify-center">
            <div className="text-pale text-[20px] w-fit border-electric-lime border-b-[4px] pb-[15px] mb-[-4px]">
              PHASE 1
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="text-pale text-[20px] w-fit border-electric-lime border-b-[4px] pb-[15px] mb-[-4px]">
              PHASE 2
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="text-pale text-[20px] w-fit border-electric-lime border-b-[4px] pb-[15px] mb-[-4px]">
              PHASE 3
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 mt-[60px] mx-[25px]">
            {phase1.map((phase, idx) => (
              <div className="flex mb-[20px]" key={idx}>
                <Image
                  src="/check-square.svg"
                  alt="Check Square"
                  className=""
                  width={20}
                  height={20}
                  priority
                  style={{ objectFit: "contain" }}
                />
                <div className="text-pale text-[16px] ml-[15px]">{phase}</div>
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="flex-1 mt-[60px] mx-[25px]">
              {phase2.map((phase, idx) => (
                <div className="flex mb-[20px]" key={idx}>
                  <Image
                    src="/check-square.svg"
                    alt="Check Square"
                    className=""
                    width={20}
                    height={20}
                    priority
                    style={{ objectFit: "contain" }}
                  />
                  <div className="text-pale text-[16px] ml-[15px]">{phase}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex-1 mt-[60px] mx-[25px]">
              {phase3.map((phase, idx) => (
                <div className="flex mb-[20px]" key={idx}>
                  <Image
                    src="/square.svg"
                    alt="Check Square"
                    className=""
                    width={20}
                    height={20}
                    priority
                    style={{ objectFit: "contain" }}
                  />
                  <div className="text-pale text-[16px] ml-[15px]">{phase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
