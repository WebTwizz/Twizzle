import styled from "styled-components";

type StyledCarouselProps = {
    styleOverrides?: React.CSSProperties;
}

export const StyledCarousel = styled.div<StyledCarouselProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  ${({ styleOverrides }) => ({ ...styleOverrides })};   
`;

type StyledCarouselSlidesProps = {
    slideIndex: number;
}

export const StyledCarouselSlides = styled.div<StyledCarouselSlidesProps>`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  transform: ${({ slideIndex }: { slideIndex: number }) =>  `translateX(-${slideIndex}00%)`};
  & > * {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
  }
`;

export const StyledCarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  & > button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.5);
    font-size: 2rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const StyledCarouselDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  & > button {
    width: 0.5rem;
    height: 0.75rem;
    margin: 0 0.25rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
    &.active {
      background-color: rgba(255, 255, 255, 1);
    }
  }
`;
