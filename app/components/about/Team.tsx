"use client";

import React from "react";
import Image from "next/image";
import { TelegramIcon } from "../../components/icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import InstagramIcon from "../icons/InstagramIcon";
import DiscordIcon from "../icons/DiscordIcon";

interface IMember {
  photo: string;
  name: string;
  role: string;
  desc: string;
  telegram: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

const Member: React.FC<{ member: IMember }> = ({ member }) => {
  return (
    <div className="bg-dark p-[30px] max-md:p-[20px]">
      <div className="flex items-start">
        <Image src={member.photo} alt={member.name} width={100} height={100} />
        <div className="ml-[30px] w-full max-3xl:flex max-3xl:justify-between max-md:block">
          <div>
            <h3
              className={`text-[24px] leading-broad uppercase tracking-minor-wide max-md:tracking-normal max-md:text-[20px] ${
                member.name.length > 11
                  ? "max-md:leading-super-tight"
                  : "max-md:leading-tight"
              }`}
            >
              {member.name}
            </h3>
            <span className="font-medium leading-tight text-electric-lime text-[16px]">
              {member.role}
            </span>
          </div>
          <div className="mt-[15px] flex gap-5 max-md:mt-[25px]">
            <a href={member.telegram}>
              <TelegramIcon />
            </a>
            <a href={member.twitter}>
              <TwitterIcon />
            </a>
            <a href={member.instagram}>
              <InstagramIcon />
            </a>
            <a href={member.linkedin}>
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>
      <p className="mt-[20px] text-light-grey leading-specific-tight font-medium max-3xl:leading-tight max-3xl:text-[20px] max-md:text-[16px] max-md:leading-specific-tight">
        {member.desc}
      </p>
    </div>
  );
};

export const TeamSection: React.FC<{ members: Array<IMember> }> = ({
  members,
}) => {
  return (
    <section className="max-w-[1200px] mx-auto max-3xl:px-[30px] mb-[150px]">
      <h1 className="mt-[100px] mb-[50px] text-center text-[30px] tracking-wide leading-none max-3xl:mt-[75px] max-md:mt-[50px] max-md:mb-[30px]">
        THE TEAM
      </h1>
      <div className="grid grid-cols-2 gap-[40px] max-3xl:grid-cols-1 max-3xl:gap-[30px]">
        {!!members.length &&
          members.map((member) => {
            return <Member member={member} key={member.name} />;
          })}
      </div>
    </section>
  );
};
