import React from 'react';

const TokenomicsSection = () => {
  return (
    <section className='bg-[#111] py-[100px]'>
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-col items-center">
          <div className="text-pale text-[30px] font-bold">TOKENOMICS</div>
          <div className="flex mt-[20px] gap-[20px]">
            <div className="text-electric-lime text-[20px]">Focused on growth:</div>
            <div className="text-pale text-[20px]">Our transaction fees are designed to sustain the project</div>
          </div>
          <div className="text-light-grey text-[16px] whitespace-pre-line text-center mt-[15px]">{`To incentivize our long term holders to "HODL" $HYPER, the following fees will make sure that the project will stay sustainable.
          Fees on the pancakeswap DEX will be reduced once the project is fully developed.`}</div>
          <div className="flex mt-[40px] px-[39px] py-[37px] justify-between w-full bg-dark">
            <div>
              <div className="text-pale text-[24px] mb-[6px]">10% TOTAL FEE</div>
              <div className="text-light-grey text-[16px]">*These fees are only on pancakeswap</div>
            </div>
            <div className='flex gap-[20px]'>
              <div className="text-electric text-[40px] text-electric-lime">5.0%</div>
              <div>
                <div className="text-pale text-[20px]">MARKETING</div>
                <div className="text-light-grey text-[20px]">FEE</div>
              </div>
            </div>
            <div className='flex gap-[20px]'>
              <div className="text-electric text-[40px] text-electric-lime">4.9%</div>
              <div>
                <div className="text-pale text-[20px]">BUYBACK</div>
                <div className="text-light-grey text-[20px]">FEE</div>
              </div>
            </div>
            <div className='flex gap-[20px]'>
              <div className="text-electric text-[40px] text-electric-lime">0.1%</div>
              <div>
                <div className="text-pale text-[20px]">BURN</div>
                <div className="text-light-grey text-[20px]">FEE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;