import React, { useEffect, useRef } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {
  StyledCarousel,
  StyledCarouselControls,
  StyledCarouselDots,
  StyledCarouselSlides,
} from "./StyledCarousel";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Children of the carousel
   */
  children?: React.ReactNode;

  /**
   * Show arrows
   * @default true
   */
  showArrows?: boolean;

  /**
   * Show dots
   * @default true
   */
  showDots?: boolean;

  /**
   * Styling added to the element
   *
   */
  style?: React.CSSProperties;

  /**
   * Boolean to enable auto slide
   */
  autoSlide?: boolean;

  /**
   * Auto slide interval
   * @default 5000 or 5 seconds
   */
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  showArrows = true,
  showDots = true,
  style,
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const ref = useRef(null);
  const childrenLength = React.Children.count(children);

  const handleSelect = (selectedIndex: number) => {
    if (childrenLength <= 1 || !childrenLength) {
      return;
    }
    if (selectedIndex < 0) {
      selectedIndex = childrenLength - 1;
    } else if (selectedIndex > childrenLength - 1) {
      selectedIndex = 0;
    }
    setSlideIndex(selectedIndex);
  };

  const dots = () => {
    const dots = [];
    for (let i = 0; i < childrenLength && i < 5; i++) {
      dots.push(
        <button
          key={i}
          className={`${i === slideIndex % 5 ? "active" : ""}`}
          onClick={() => handleSelect(i)}
        ></button>
      );
    }
    return <StyledCarouselDots>{dots}</StyledCarouselDots>;
  };

  useEffect(() => {
    if (autoSlide) {
      //* Auto slide
      const interval = setInterval(() => {
        handleSelect(slideIndex + 1);
      }, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [slideIndex, autoSlide, autoSlideInterval]);

  return (
    <StyledCarousel styleOverrides={style}>
      <StyledCarouselSlides ref={ref} slideIndex={slideIndex}>
        {children}
      </StyledCarouselSlides>
      {showArrows && (
        <StyledCarouselControls>
          <button onClick={() => handleSelect(slideIndex - 1)}>
            <BsChevronLeft />
          </button>
          <button onClick={() => handleSelect(slideIndex + 1)}>
            <BsChevronRight />
          </button>
        </StyledCarouselControls>
      )}
      {showDots && dots()}
    </StyledCarousel>
  );
};

export default Carousel;
