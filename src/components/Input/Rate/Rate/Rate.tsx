import React, { useCallback, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { StyledRate, StyledRateIcon } from "./StyledRate";

interface RateProps {
  /**
   * icon to be displayed
   */
  icon?: React.ReactNode;
  /**
   * size of the icon
   */
  iconSize?: string;
  /**
   * disabled state of the component
   */
  disabled?: boolean;
  /**
   * default rating value
   */
  rating?: number;
  /**
   * callback function to be called when rating is changed
   */
  onRateChange?: (rating: number) => void;
  /**
   * allow rate component to be cleared
   */
  allowClear?: boolean;
  /**
   * color of the icon
   */
  color?: string;
}
const Rate: React.FC<RateProps> = ({
  disabled,
  rating = 3,
  onRateChange,
  icon = <AiFillStar />,
  color = "#ffc107",
  iconSize = "2rem",
  allowClear = true,
}) => {
  const [clicked, setClicked] = useState(true);
  const [currentRating, setCurrentRating] = useState([
    { rating: 1, isActive: false },
    { rating: 2, isActive: false },
    { rating: 3, isActive: false },
    { rating: 4, isActive: false },
    { rating: 5, isActive: false },
  ]);
  const handleRateChange = useCallback((rating: number) => {
    setCurrentRating(
      currentRating.map((item, index) => {
        if (index < rating) {
          return { ...item, isActive: true };
        } else {
          return { ...item, isActive: false };
        }
      })
    );

    if (onRateChange) {
      onRateChange(rating);
    }
  }, []);

  const clearAll = useCallback(() => {
    setCurrentRating(
      currentRating.map((item) => {
        return { ...item, isActive: false };
      })
    );
    setClicked(false);
  }, []);

  useEffect(() => {
    if (rating) {
      handleRateChange(rating);
    }
  }, [rating]);

  return (
    <StyledRate role="rate">
      {icon ? (
        <>
          {currentRating.map((item, index) => {
            return (
              <StyledRateIcon
                key={index}
                color={item.isActive ? color : "#ccc"}
                style={{
                  fontSize: iconSize,
                  cursor: disabled ? "not-allowed" : "pointer",
                }}
                onClick={() => {
                  !disabled?handleRateChange(item.rating): null;
                  if(allowClear) {
                    //IF IT IS THE SAME ITEM CLICKED, CLEAR ALL
                    if (item.isActive && clicked) {
                      clearAll();
                    } 
                    setClicked(true);
                  }
                }}
                onMouseDown={() => {
                  !disabled && !clicked? handleRateChange(item.rating) : null;
                }}
              >
                {icon}
              </StyledRateIcon>
            );
          })}
        </>
      ) : null}
    </StyledRate>
  );
};

export default Rate;
