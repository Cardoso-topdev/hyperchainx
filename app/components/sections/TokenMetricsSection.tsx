'use client'
import React, { useState } from 'react';
import styled from "styled-components";
import Image from 'next/image'

const tokenMetrics = [
  {
    title: 'Presale',
    value: 10,
    clsNameExt: 'bg-dark-grey h-[3px] w-[120px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[120px]'
  },
  {
    title: 'Liquidity',
    value: 6,
    clsNameExt: 'bg-dark-grey h-[3px] w-[72px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[72px]'
  },
  {
    title: 'CEX listings',
    value: 30,
    clsNameExt: 'bg-dark-grey h-[3px] w-[360px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[360px]'
  },
  {
    title: 'Gaming ecosystem',
    value: 18,
    clsNameExt: 'bg-dark-grey h-[3px] w-[216px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[216px]'
  },
  {
    title: 'Marketing',
    value: 8,
    clsNameExt: 'bg-dark-grey h-[3px] w-[96px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[96px]'
  },
  {
    title: 'Liquidity tokens',
    value: 5,
    clsNameExt: 'bg-dark-grey h-[3px] w-[60px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[60px]'
  },
  {
    title: 'Lottery rewards',
    value: 5,
    clsNameExt: 'bg-dark-grey h-[3px] w-[60px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[60px]'
  },
  {
    title: 'Treasury',
    value: 4,
    clsNameExt: 'bg-dark-grey h-[3px] w-[48px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[48px]'
  },
  {
    title: 'Staking',
    value: 4,
    clsNameExt: 'bg-dark-grey h-[3px] w-[48px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[48px]'
  },
  {
    title: 'Yield farming',
    value: 4,
    clsNameExt: 'bg-dark-grey h-[3px] w-[48px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[48px]'
  },
  {
    title: 'Team & Advisory',
    value: 4,
    clsNameExt: 'bg-dark-grey h-[3px] w-[48px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[48px]'
  },
  {
    title: 'Founders',
    value: 1,
    clsNameExt: 'bg-dark-grey h-[3px] w-[12px]',
    clsActiveNameExt: 'bg-electric-lime h-[3px] w-[12px]'
  }
]
const TokenMetricsSection = () => {
  const [currentTokenIdx, setCurrentTokenIdx] = useState(2)
  return (
    <section className='bg-[#111] py-[100px]'>
      <div className="max-w-[1200px] m-auto">
        <div className="flex justify-between">
          <div className="text-pale text-[30px] mb-[44px]">TOKEN METRICS</div>
          <button type="button" className='bg-dark-grey px-[15px] py-[8px] text-electric-lime flex items-center'>
            <span>Read more</span>
            <Image
              src="/read-more-arrow.webp"
              alt="arrow right"
              className="ml-[15px]"
              width={14}
              height={14}
              priority
              style={{ objectFit: "contain" }}
            />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className='flex flex-col gap-[13px]'>
              {tokenMetrics.map((metric, idx) => (
                <div className="flex items-center cursor-pointer" key={metric.title} onClick={() => setCurrentTokenIdx(idx)}>
                  <div className="flex w-[200px] justify-between mr-[20px]">
                    <div className="text-pale">{metric.title}</div>
                    <div className="text-light-grey">{metric.value}%</div>
                  </div>
                  <div className={(idx === currentTokenIdx) ? metric.clsActiveNameExt : metric.clsNameExt}></div>
                </div>
              ))}
            </div>
          </div>
          <div className='relative flex items-center'>
            <PieView percent={tokenMetrics[currentTokenIdx].value} className="relative w-[387px] h-[387px] before:content-[''] before:absolute before:rounded-full before:inset-0" />
            <div className="absolute top-[85px] right-[85px] w-[220px] h-[220px] flex justify-center items-center backdrop-blur-[23px] border-dark-grey border-2 rounded-full flex-col">
              <div className="text-pale text-[20px]">{tokenMetrics[currentTokenIdx].title}</div>
              <div className="text-electric-lime text-[20px]">{tokenMetrics[currentTokenIdx].value}%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenMetricsSection;

const PieView = styled.div<{ percent: number }>`
  :before{
    background: conic-gradient(#a3ff12 calc(${props => props.percent}*1%),#0000 0);
  }
`