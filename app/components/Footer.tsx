import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div>
      <div className="h-[90px] border-b-2 border-dark-grey">
        <div className="max-w-[1200px] m-auto h-[90px] border-dark-grey border-2 border-y-0 px-[30px] flex justify-between items-center">
          <div className="relative justify-start">
            <div className="w-[240px] h-[40px] max-sm:w-full relative ">
              <Link href="/">
                <Image
                  src="/logo.png"
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
      <div className="max-w-[1200px] m-auto border-dark-grey border-2 border-y-0 px-[30px] py-[40px]">
        <div className="flex justify-between">
          <div className="text-pale w-[476px]">
            Hyperchain X is the first community-driven token in gaming. We are
            creating an online gaming ecosystem for gamers, connected to the
            blockchain, with a full social media experience.
          </div>
          <div className="flex gap-[100px]">
            <div>
              <div className="text-electric-lime text-[16px]">COMMUNITY</div>
              <Link href="/">
                <div className="text-pale text-[16px] mt-[20px]">Telegram</div>
              </Link>
              <Link href="/">
                <div className="text-pale text-[16px] mt-[20px]">Discord</div>
              </Link>
            </div>
            <div>
              <div className="text-electric-lime text-[16px]">RESOURCES</div>
              <Link href="/">
                <div className="text-pale text-[16px] mt-[20px]">Contract</div>
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
        <div className="text-light-grey text-[12px] mt-[58px]">
          Copyright © 2023 Hyperchain X. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
