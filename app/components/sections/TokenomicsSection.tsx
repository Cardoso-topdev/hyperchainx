import React from "react";

const TokenomicsSection = () => {
  return (
    <section className="bg-[#111] py-[100px] px-[30px] max-lg:">
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-col items-center">
          <div className="text-pale text-[30px] font-bold font-['IntegralCF']">
            TOKENOMICS
          </div>
          <div className="flex mt-[20px] gap-[20px] max-xmd:flex-col max-xmd:text-center">
            <div className="text-electric-lime text-[20px] max-lg:text-[16px] font-['Industry']">
              Focused on growth:
            </div>
            <div className="text-pale text-[20px] max-lg:text-[16px] font-['Industry']">
              Our transaction fees are designed to sustain the project
            </div>
          </div>
          <div className="text-light-grey text-[16px] max-lg:text-[14px] whitespace-pre-line max-lg:whitespace-normal text-center mt-[15px] font-['Industry']">{`To incentivize our long term holders to "HODL" $HYPER, the following fees will make sure that the project will stay sustainable.
          Fees on the pancakeswap DEX will be reduced once the project is fully developed.`}</div>
          <div className="flex mt-[40px] px-[39px] py-[37px] max-xmd:px-[10px] max-xmd:py-[10px] max-xmd:ml-[-5px] max-xmd:w-[100vw] justify-between w-full bg-dark gap-[10px]">
            <div className="flex-1">
              <div className="text-pale text-[24px] max-lg:text-[16px] mb-[6px] font-['IntegralCF']">
                10% TOTAL FEE
              </div>
              <div className="text-light-grey text-[16px] max-lg:text-[14px] font-['Industry']">
                *These fees are only on pancakeswap
              </div>
            </div>
            <div className="flex-3 flex gap-[15px] max-xmd:flex-col">
              <div className="flex gap-[20px] max-lg:gap-[5px] flex-1 justify-end">
                <div className="text-electric text-[40px] max-lg:text-[24px] text-electric-lime font-['Industry']">
                  5.0%
                </div>
                <div className="font-['Industry-Demi']">
                  <div className="text-pale text-[20px] max-lg:text-[14px]">
                    MARKETING
                  </div>
                  <div className="text-light-grey text-[20px] max-lg:text-[14px]">
                    FEE
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] max-lg:gap-[5px] flex-1 justify-end">
                <div className="text-electric text-[40px] max-lg:text-[24px] text-electric-lime font-['Industry']">
                  4.9%
                </div>
                <div className="font-['Industry-Demi']">
                  <div className="text-pale text-[20px] max-lg:text-[14px]">
                    BUYBACK
                  </div>
                  <div className="text-light-grey text-[20px] max-lg:text-[14px]">
                    FEE
                  </div>
                </div>
              </div>
              <div className="flex gap-[20px] max-lg:gap-[5px] flex-1 justify-end">
                <div className="text-electric text-[40px] max-lg:text-[24px] text-electric-lime font-['Industry']">
                  0.1%
                </div>
                <div className="font-['Industry-Demi']">
                  <div className="text-pale text-[20px] max-lg:text-[14px]">
                    BURN
                  </div>
                  <div className="text-light-grey text-[20px] max-lg:text-[14px]">
                    FEE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
