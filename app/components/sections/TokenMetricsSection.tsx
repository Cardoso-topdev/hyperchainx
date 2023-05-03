'use client'
import React, { useState } from 'react';

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
        <div className="flex">
          <div>
            <div className="text-pale text-[30px] mb-[44px]">TOKEN METRICS</div>
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
          <div className="pie relative w-[150px] h-[150px] "></div>
        </div>
      </div>
    </section>
  );
};

export default TokenMetricsSection;

// before:bg-electric-lime before:bg-gradient-to-br before:from-electric-lime before:to-transparent before:bg-radial-gradient before:bg-contain