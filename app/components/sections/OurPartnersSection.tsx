import React from "react";
import Image from "next/image";

const OurPartnersSection = () => {
  return (
    <section className="mt-[-100px] h-[515px] w-full bg-gradient-bottom-lime pb-[150px]">
      <div className="max-w-[1200px] m-auto pt-[140px]">
        <div className="text-pale text-[24px] text-center font-bold">
          OUR PARTNERS
        </div>
        <div className="flex justify-between mt-[50px]">
          <Image
            src="/coingecko.png"
            alt="coingecko"
            className=""
            width={170}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/cmc.png"
            alt="cmc"
            className=""
            width={222}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/inphantry.png"
            alt="inphantry"
            className=""
            width={154}
            height={22}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/tandon.png"
            alt="tandon"
            className=""
            width={150}
            height={22}
            priority
            style={{ objectFit: "contain" }}
          />
          <Image
            src="/bitmart.png"
            alt="bitmart"
            className=""
            width={158}
            height={38}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between mt-[50px] w-fit gap-[80px]">
            <Image
              src="/pancake.png"
              alt="pancake"
              className=""
              width={206}
              height={32}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/bscscan.png"
              alt="bscscan"
              className=""
              width={151}
              height={38}
              priority
              style={{ objectFit: "contain" }}
            />
            <Image
              src="/group.png"
              alt="Certik"
              className=""
              width={160}
              height={38}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
