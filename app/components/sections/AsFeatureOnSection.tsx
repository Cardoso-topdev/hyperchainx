import React from 'react';
import Image from 'next/image'

const AsFeatureOnSection = () => {
  return (
    <section className='mt-[-100px] h-[420px] w-full bg-gradient-bottom-lime'>
      <div className="max-w-[1200px] m-auto pt-[200px]">
        <div className="text-pale text-[24px] text-center font-bold">AS FEATURE ON</div>
        <div className="flex justify-between mt-[50px]">
          <Image
            src="/digital-journal.webp"
            alt="Digital Journal"
            className=""
            width={254}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/bloomberg.webp"
            alt="Bloomberg"
            className=""
            width={200}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/yahoo.webp"
            alt="Yahoo"
            className=""
            width={118}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/investing.webp"
            alt="Invest"
            className=""
            width={193}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/marketwatch.webp"
            alt="Market Watch"
            className=""
            width={206}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default AsFeatureOnSection;
