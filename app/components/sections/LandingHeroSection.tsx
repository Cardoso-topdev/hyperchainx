import React from "react";
import Image from "next/image";
import SocialLinks from "../SocialLinks";

const LiveStatView = ({
  title,
  statValue,
  hasHelp = false,
}: {
  title: string;
  statValue: string;
  hasHelp?: boolean;
}) => {
  return (
    <div className="bg-[rgba(22,22,22,0.7)] p-[20px] max-3xl:p-[15px] w-[285px] max-xl:w-fit max-xmd:w-[calc(50vw-40px)] max-xmd:justify-between">
      <div className="text-[20px] max-3xl:text-[16px]">{title}</div>
      <div className="text-[30px] max-3xl:text-[24px] text-electric-lime mt-[10px] max-md:text-[20px]">
        {statValue}
      </div>
    </div>
  );
};
const liveStats = [
  {
    title: "MAX SUPPLY",
    statValue: "1,000,000,000",
  },
  {
    title: "CIRCULATING SUPPLY",
    statValue: "558,932,000",
  },
  {
    title: "MARKET CAP",
    statValue: "$2,878,442",
  },
  {
    title: "FDV",
    statValue: "$2,971,943",
  },
];
const LandingHeroSection = () => {
  return (
    <section className="mt-[200px] max-3xl:mt-[170px] max-xmd:mt-[116px] mb-[100px] px-[30px]">
      <div className="max-w-[1200px] m-auto">
        <div className="flex items-center">
          <div>
            <h1 className="text-[30px] max-sm:text-[28px] text-pale whitespace-pre-line max-xmd:whitespace-normal mb-[30px]">
              {`THE ALL-IN-ONE CRYPTO
            GAMING PLATFORM`}
            </h1>
            <span className="w-[556px] text-light-grey whitespace-pre-line mb-[70px] block max-md:w-full max-xmd:whitespace-normal">
              {`NFTS and blockchains are the future of gaming, we at
              HyperchainX are providing a tailored NFT marketplace and
              gaming platform ecosystem. Built by gamers, for the gamers!`}
            </span>
            <div className="flex">
              <button
                type="button"
                className="bg-electric-lime px-[15px] py-[8px] text-[#101010] flex items-center"
              >
                <span className="font-['Industry-Demi']">Buy $HYPER</span>
                <Image
                  src="/arrow-right.webp"
                  alt="arrow right"
                  className="ml-[15px] max-xsm:ml-[5px]"
                  width={14}
                  height={14}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </button>
              <button
                type="button"
                className="bg-dark-grey px-[15px] py-[8px] text-[#101010] flex items-center ml-[30px]"
              >
                <span className="text-pale font-['Industry-Demi']">
                  View Chart
                </span>
                <Image
                  src="/line-chart.webp"
                  alt="Line Chart"
                  className="ml-[15px] max-xsm:ml-[5px]"
                  width={14}
                  height={14}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </button>
            </div>
            <div className="mt-[40px]">
              <SocialLinks />
            </div>
          </div>
          {/* <div className="flex-1 flex justify-center">
            <div className="w-[471px] h-[471px] opacity-40 blur-[50px]  bg-hero-section-avatar absolute"> </div>
          </div> */}
        </div>
        <div className="flex items-center flex-col mt-[90px]">
          <div className="flex items-center">
            <span className="text-pale text-[30px]">LIVE STATS</span>
            <span className="ml-[15px] w-[7px] h-[7px] bg-electric-lime block rounded-full shadow-[0_0_7px_4px_rgba(163,255,18,0.15)]"></span>
          </div>
          <div className="flex justify-between mt-[30px] w-full flex-wrap gap-y-[8px]">
            {liveStats.map((liveStat) => (
              <LiveStatView key={liveStat.title} {...liveStat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeroSection;
