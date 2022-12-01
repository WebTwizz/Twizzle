import React, { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import {
  StyledTypography1,
  StyledTypography2,
  StyledTypography3,
  StyledTypography4,
  StyledTypography5,
  StyledTypography6,
  StyledTypographyp,
} from "./StyledTypography";

interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Element to be rendered
   * Numbers indicate the size of the element
   */
  variant: 1 | 2 | 3 | 4 | 5 | 6 | "p";
  /**
   * The ability of the element to be edited
   */
  editable?: boolean;
  /**
   * The ability of the element to be disabled
   */
  disabled?: boolean;
  /**
   * Bold text
   */
  bold?: boolean;
  /**
   * Italic text
   */
  italic?: boolean;
  /**
   * OnClick handler for the element
   */
  onClick?: () => void;
  /**
   * Children to be rendered inside the element
   */
  children?: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  disabled,
  editable,
  bold,
  italic,
  onClick,
  style,
  children,
  ...props
}: TypographyProps) => {
  const fontWeight = bold ? "500" : "300";

  const fontFamily =
    useContext(ThemeContext).typography?.fontFamily || "sans-serif";

  const customStyle = {
    fontStyle: italic ? "italic" : "normal",
    fontFamily,
    cursor: disabled ? "not-allowed" : "inherit",
    ...style,
  };
  return (
    <>
      {variant == 1 && (
        <StyledTypography1
          contentEditable={editable}
          onClick={() => onClick?.()}
          styleOverrides={{ fontWeight: fontWeight, ...customStyle }}
          {...props}
        >
          {children}
        </StyledTypography1>
      )}
      {variant == 2 && (
        <StyledTypography2
          contentEditable={editable}
          onClick={() => onClick?.()}
          styleOverrides={{ fontWeight: fontWeight, ...customStyle }}
          {...props}
        >
          {children}
        </StyledTypography2>
      )}
      {variant == 3 && (
        <StyledTypography3
          contentEditable={editable}
          onClick={() => onClick?.()}
          styleOverrides={{ fontWeight: fontWeight, ...customStyle }}
          {...props}
        >
          {children}
        </StyledTypography3>
      )}
      {variant == 4 && (
        <StyledTypography4
          contentEditable={editable}
          onClick={() => onClick?.()}
          styleOverrides={{ fontWeight: fontWeight, ...customStyle }}
          {...props}
        >
          {children}
        </StyledTypography4>
      )}
      {variant == 5 && (
        <StyledTypography5
          contentEditable={editable}
          onClick={() => onClick?.()}
          styleOverrides={{ fontWeight: fontWeight, ...customStyle }}
          {...props}
        >
          {children}
        </StyledTypography5>
      )}
      {variant == 6 && (
        <StyledTypography6
          contentEditable={editable}
          onClick={() => onClick?.()}
          styleOverrides={{ fontWeight: fontWeight, ...customStyle }}
          {...props}
        >
          {children}
        </StyledTypography6>
      )}
      {variant == "p" && (
        <StyledTypographyp
          contentEditable={editable}
          onClick={() => onClick?.()}
          styleOverrides={{ fontWeight: fontWeight, ...customStyle }}
          {...props}
        >
          {children}
        </StyledTypographyp>
      )}
    </>
  );
};

export default Typography;
