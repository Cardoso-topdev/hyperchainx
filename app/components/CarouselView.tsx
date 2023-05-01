'use client'

import { ButtonBack, ButtonNext, CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';
import React, { ReactNode, useState } from 'react';
import Image from 'next/image'
import styled from "styled-components";

const CarouselView: React.FC<{
  totalSlidesCnt?: number,
  showPrevNextBtns?: boolean,
  children: ReactNode
}> = ({totalSlidesCnt = 3, showPrevNextBtns = true, children}) => {
  const [slideCount, setSlideCount] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <CarouselWrapper className="carousel-container">
      <CarouselProvider
        visibleSlides={slideCount}
        totalSlides={totalSlidesCnt}
        step={1}
        currentSlide={currentSlide}
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        isIntrinsicHeight={true}
      >
        <Wrapper>
          <Slider>
            {children}
          </Slider>
          <div className="controls">
            {showPrevNextBtns && <ButtonBack className="btn-arrow reverse-arrow">
              <Image
                src="/arrow-right.svg"
                alt="arrow right"
                className="ml-[15px]"
                width={14}
                height={14}
                priority
                style={{ objectFit: "contain" }}
              />
            </ButtonBack>}
            <DotGroup className="dot-group" />
            {showPrevNextBtns && <ButtonNext className="btn-arrow">
              <Image
                src="/arrow-right.svg"
                alt="arrow right"
                className="ml-[15px]"
                width={14}
                height={14}
                priority
                style={{ objectFit: "contain" }}
              />
            </ButtonNext>}
          </div>
        </Wrapper>
      </CarouselProvider>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  &.carousel-container {
    margin: 12px auto;
    max-width: 272px;
    overflow: hidden;
    /* filter: drop-shadow(0px 12px 30px rgba(50, 50, 50, 0.2)); */

    /* Total-width (including margin) + 1 additional margin */
    @media (min-width: 832px) {
      max-width: 704px;
    }

    @media (min-width: 1088px) {
      max-width: 960px;
    }

    @media (min-width: 1272px) {
      max-width: 1152px;
    }

    @media (min-width: 1504px) {
      max-width: 1344px;
    }
  }

  /* This class is found in Slide from pure-react-carousel */
  /* We need to override it to add space between slides */
  .carousel__inner-slide {
    /* width: 100% - margin */
    width: 100%;
    /* margin-left: margin/2 */
    /* margin is required to adjust positioning as the width is diminished*/
  }
`;

const Wrapper = styled.div`
  .controls {
    display: flex;
    align-items: center;

    .btn-arrow {
      border: none;
      background: none;
      padding: 11px 20px;
    }

    .reverse-arrow {
      transform: rotateY(180deg);
    }

    .dot-group {
      display: flex;
      align-items: center;

      .carousel__dot {
        width: 54px;
        height: 2px;
        border: none;
        border-radius: 50%;
        margin: 0 4px;
        padding: 0;
        background-color: #202020;
      }

      /* This class is found in DotGroup from pure-react-carousel */
      /* We need to override it to add our styles */
      .carousel__dot--selected {
        width: 54px;
        height: 2px;
        border-radius: 10px;
        background-color: #a3ff12;
        transition: background 0.4s ease;
      }
    }
  }
`;

export default CarouselView;