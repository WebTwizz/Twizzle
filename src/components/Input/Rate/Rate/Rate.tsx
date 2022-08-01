import React, { useCallback, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

interface RateProps {
  icon?: React.ReactNode;
  iconSize?: string;
  disabled?: boolean;
  rating?: number;
  onRate?: (rating: number) => void;
  allowClear?: boolean;
  color?: string;
  style?: React.CSSProperties;
}
const Rate: React.FC<RateProps> = ({
  disabled,
  rating = 3,
  onRate,
  icon = <AiFillStar />,
  color = "#ffc107",
  iconSize = "2rem",
  allowClear = true,
  style,
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

    if (onRate) {
      onRate(rating);
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
    <div className="twizzle-rate" style={{ display: "flex", ...style }} role="rate">
      {icon ? (
        <>
          {currentRating.map((item, index) => {
            return (
              <div
                className="twizzle-rate-icon"
                style={{
                  color: item.isActive ? color : "#ccc",
                  fontSize: iconSize,
                  cursor: disabled ? "not-allowed" : "pointer",
                }}
                onClick={() => {
                  !disabled?handleRateChange(item.rating): null;
                  allowClear? clicked? clearAll(): setClicked(true): null;
                }}
                onMouseEnter={() => {
                  !disabled && !clicked? handleRateChange(item.rating) : null;
                }}
              >
                {icon}
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default Rate;
