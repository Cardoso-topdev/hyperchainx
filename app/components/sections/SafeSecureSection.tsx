import React from "react";
import Image from "next/image";

const SafeSecureSection = () => {
  return (
    <section className="bg-electric-lime py-[60px]">
      <div className="max-w-[1200px] m-auto">
        <div className="flex">
          <div>
            <Image
              src="/secure-illustration.svg"
              alt="Secure Illustration"
              className=""
              width={222}
              height={245}
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <div className="text-dark text-[30px] font-bold">
                SAFE AND SECURE
              </div>
              <button
                type="button"
                className="bg-dark-grey px-[15px] py-[8px] text-electric-lime flex items-center h-[40px]"
              >
                <span>AUDIT BY</span>
                <Image
                  src="/certik-electric-mark.png"
                  alt="certik mark"
                  className="ml-[15px]"
                  width={120}
                  height={18}
                  priority
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/read-more-arrow.webp"
                  alt="certik mark"
                  className="ml-[15px]"
                  width={14}
                  height={14}
                  priority
                  style={{ objectFit: "contain" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafeSecureSection;
