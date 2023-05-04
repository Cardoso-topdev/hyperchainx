import React from "react";
import Image from "next/image";

const OurPartnersSection = () => {
  return (
    <section className="mt-[-100px] h-[515px] w-full bg-gradient-bottom-lime pb-[150px] px-[30px]">
      <div className="max-w-[1200px] m-auto pt-[140px]">
        <div className="text-pale text-[24px] text-center font-bold font-['IntegralCF']">
          OUR PARTNERS
        </div>
        <div className="max-xmd:hidden flex justify-between mt-[50px]">
          <Image
            src="/coingecko.png"
            alt="coingecko"
            className="max-lg:w-[135px] max-lg:h-[31px]"
            width={170}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/cmc.png"
            alt="cmc"
            className="max-lg:w-[176px] max-lg:h-[31px]"
            width={222}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/inphantry.png"
            alt="inphantry"
            className="max-lg:w-[150px] max-lg:h-[31px]"
            width={154}
            height={22}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/tandon.png"
            alt="tandon"
            className="max-lg:w-[118px] max-lg:h-[18px]"
            width={150}
            height={22}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/bitmart.png"
            alt="bitmart"
            className="max-lg:w-[100px] max-lg:h-[31px]"
            width={158}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="max-xmd:hidden flex justify-center">
          <div className="flex justify-between mt-[50px] w-fit gap-[80px]">
            <Image
              src="/pancake.png"
              alt="pancake"
              className="max-lg:w-[164px] max-lg:h-[25px]"
              width={206}
              height={32}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/bscscan.png"
              alt="bscscan"
              className="max-lg:w-[140px] max-lg:h-[31px]"
              width={151}
              height={38}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/group.png"
              alt="Certik"
              className="max-lg:w-[120px] max-lg:h-[31px]"
              width={160}
              height={38}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="xmd:hidden flex flex-wrap gap-[8px] gap-y-[20px] mt-[30px]">
          <Image
            src="/coingecko.png"
            alt="coingecko"
            className="max-lg:w-[135px] max-lg:h-[31px]"
            width={170}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/cmc.png"
            alt="cmc"
            className="max-lg:w-[166px] max-lg:h-[31px]"
            width={222}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/inphantry.png"
            alt="inphantry"
            className="max-lg:w-[150px] max-lg:h-[31px]"
            width={154}
            height={22}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/tandon.png"
            alt="tandon"
            className="max-lg:w-[118px] max-lg:h-[18px]"
            width={150}
            height={22}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/bitmart.png"
            alt="bitmart"
            className="max-lg:w-[100px] max-lg:h-[31px]"
            width={158}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/pancake.png"
            alt="pancake"
            className="max-lg:w-[164px] max-lg:h-[25px]"
            width={206}
            height={32}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/bscscan.png"
            alt="bscscan"
            className="max-lg:w-[140px] max-lg:h-[31px]"
            width={151}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/group.png"
            alt="Certik"
            className="max-lg:w-[120px] max-lg:h-[31px]"
            width={160}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
