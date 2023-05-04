import React from "react";
import Image from "next/image";

const AsFeatureOnSection = () => {
  return (
    <section className="mt-[-100px] h-[420px] w-full bg-gradient-bottom-lime px-[30px]">
      <div className="max-w-[1200px] m-auto pt-[200px]">
        <div className="text-pale text-[24px] text-center font-bold font-['IntegralCF']">
          AS FEATURE ON
        </div>
        <div className="flex justify-between mt-[50px] flex-wrap gap-y-[20px]">
          <Image
            src="/bloomberg.webp"
            alt="Bloomberg"
            className="max-xl:w-[103px] max-xl:h-[21px]"
            width={200}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/yahoo.webp"
            alt="Yahoo"
            className="max-xl:w-[73px] max-xl:h-[30px]"
            width={118}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/investing.webp"
            alt="Invest"
            className="max-xl:w-[125px] max-xl:h-[28px]"
            width={193}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/digital-journal.webp"
            alt="Digital Journal"
            className="max-xl:w-[167px] max-xl:h-[21px]"
            width={254}
            height={30}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/marketwatch.webp"
            alt="Market Watch"
            className="max-xl:w-[134px] max-xl:h-[21px]"
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
