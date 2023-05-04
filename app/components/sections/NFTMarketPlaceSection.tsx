import React from "react";
import Image from "next/image";

const NFTMarketPlaceSection = () => {
  return (
    <section className="mt-[150px] max-xmd:mt-[75px]">
      <div className="w-full h-[252px] bg-electric-lime absolute"></div>
      <div className="px-[30px]">
        <div className="max-w-[1200px] m-auto relative pt-[100px]">
          <div className="flex justify-between">
            <div className="text-[30px] text-dark font-bold font-['IntegralCF']">
              NFT MARKETPLACE
            </div>
            <button
              type="button"
              className="bg-dark px-[15px] py-[8px] text-electric-lime flex items-center max-xmd:hidden"
            >
              <span className="font-['Industry-Demi']">Play Video</span>
              <Image
                src="/play-electric.webp"
                alt="Play"
                className="ml-[15px]"
                width={14}
                height={14}
                priority
                style={{ objectFit: "contain" }}
              />
            </button>
          </div>
          <div className="flex mt-[30px] max-xmd:flex-col">
            <div className="w-[400px] max-lg:w-[300px] h-[330px] max-lg:h-[295px] bg-dark max-xmd:w-full"></div>
            <div className="bg-[rgba(22,22,22,0.7)] w-full backdrop-blur-[20px] p-[50px] max-lg:p-[20px]">
              <div className="uppercase text-[30px] max-lg:text-[24px] font-['IntegralCF']">
                HyperchainX
              </div>
              <div className="text-electric-lime mt-[10px] text-[20px] max-lg:text-[16px] font-['Industry']">
                The ultimate NFT marketplace for gaming creators and collectors.
              </div>
              <div className="text-light-grey mt-[30px] max-lg:text-[14px] max-lg:mt-[20px] font-['Industry']">
                With a focus on culture, history, and future trends, we provide
                a fully dedicated platform with custom mystery boxes,
                whitelisting options, free claims, NFT contract creation
                support, and an affiliate marketing program to boost sales. Our
                launchpad is designed to give creators all the opportunities for
                a successful launch. Join us now and unlock the full potential
                of your NFT collection in the thriving crypto gaming industry.
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-dark-grey my-[100px] max-xmd:my-[50px]"></div>
        </div>
      </div>
    </section>
  );
};

export default NFTMarketPlaceSection;
