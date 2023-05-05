import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="h-[90px] border-y-2 border-dark-grey px-[30px]">
        <div className="max-w-[1200px] m-auto h-[90px] border-dark-grey border-2 border-y-0 px-[30px] flex justify-between items-center">
          <div className="relative justify-start">
            <div className="w-[240px] h-[40px] relative ">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Hyper Chain X Logo"
                  className=""
                  fill
                  priority
                  style={{ objectFit: "contain" }}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-end max-sm:hidden">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="px-[30px]">
        <div className="max-w-[1200px] m-auto border-dark-grey border-2 border-y-0 px-[30px] py-[40px]">
          <div className="flex justify-between">
            <div className="text-pale w-[476px] max-lg:w-[340px] max-lg:text-[14px]">
              Hyperchain X is the first community-driven token in gaming. We are
              creating an online gaming ecosystem for gamers, connected to the
              blockchain, with a full social media experience.
            </div>
            <div className="max-sm:hidden flex gap-[100px] max-lg:gap-[50px]">
              <div>
                <div className="text-electric-lime text-[16px]">COMMUNITY</div>
                <Link href="/">
                  <div className="text-pale text-[16px] mt-[20px]">
                    Telegram
                  </div>
                </Link>
                <Link href="/">
                  <div className="text-pale text-[16px] mt-[20px]">Discord</div>
                </Link>
              </div>
              <div>
                <div className="text-electric-lime text-[16px]">RESOURCES</div>
                <Link href="/">
                  <div className="text-pale text-[16px] mt-[20px]">
                    Contract
                  </div>
                </Link>
                <Link href="/">
                  <div className="text-pale text-[16px] mt-[20px]">
                    Whitepaper
                  </div>
                </Link>
                <Link href="/">
                  <div className="text-pale text-[16px] mt-[20px]">
                    Live Chart
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="sm:hidden max-sm:mt-[50px]">
            <SocialLinks />
          </div>
          <div className="text-light-grey text-[12px] max-sm:text-[10px] mt-[58px] max-sm:mt-[15px]">
            Copyright © 2023 Hyperchain X. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
