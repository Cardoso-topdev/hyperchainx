import React from 'react';
import Image from 'next/image'

const MultiChainSection = () => {
  return (
    <section>
      <div className="max-w-[1200px] m-auto">
        <div className="flex flex-col items-center mt-[100px]">
          <Image
            src="/multi-chain-mark.webp"
            alt="Multi chain"
            className="ml-[15px]"
            width={369}
            height={372}
            priority
            style={{ objectFit: "contain" }}
          />
          <div className="text-pale text-[30px] text-center absolute translate-y-[290px]">MULTI-CHAIN</div>
          <div className="text-electric-lime text-[20px] whitespace-pre-line text-center">{`Unleash the full potential of your NFT collection with our multi-chain marketplace - accessible,
          versatile, and always adapting to your needs.`}</div>
        </div>
      </div>
    </section>
  );
};

export default MultiChainSection;