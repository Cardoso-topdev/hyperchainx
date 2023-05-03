import React from "react";
import Image from "next/image";

const HyperTronsNFTsSection = () => {
  return (
    <section className="bg-[#111] py-[100px]">
      <div className="max-w-[1200px] m-auto">
        <div className="flex gap-[65px] items-center">
          <div className="w-[500px] h-[240px] bg-[#232323] shrink-0 flex items-center justify-center">
            <Image
              src="/hypertrons-nfts-preview.png"
              alt="Hypertrons NFTs"
              className="shrink-0"
              width={300}
              height={300}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="100px">
            <div className="text-[30px] font-bold mb-[10px]">
              HYPERTRONS NFTS
            </div>
            <div className="text-electric-lime text-[20px] mb-[30px]">
              Own NFTs that offer profit-sharing!
            </div>
            <div className="text-light-grey mt-30px">{`HyperchainX unveils "Hypertrons" NFTs - powerful robots from Cryptonus, available in Q1 2023 on our launchpad in 7 tiers from iconic to common. Not only do these NFTs symbolize bravery and determination of the Hypertrons in protecting the Blockchain Milky Way, but also offers a chance for the Cryptonian community to share in the platform profits through staking. Join the legendary story, own a Hypertron NFT and gain a passive income.`}</div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-dark-grey mt-[100px]"></div>
      </div>
    </section>
  );
};

export default HyperTronsNFTsSection;
