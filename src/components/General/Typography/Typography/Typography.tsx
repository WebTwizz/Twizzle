import React, { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'
import {
  StyledTypography,
  StyledTypography1, StyledTypography2, StyledTypography3, StyledTypography4, StyledTypography5, StyledTypography6, StyledTypographyp
}
from './StyledTypography'

interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement>{

  /**
   * Element to be rendered
   * Numbers indicate the size of the element
   */
  elementType: 1 | 2 | 3 | 4 | 5 | 6 | 'p'
  /**
   * The ability of the element to be edited
   */
   editable?: boolean
  /**
   * The ability of the element to be disabled
   */
  disabled?: boolean
  /**
   * Bold text
   */
  bold?: boolean
  /**
   * Italic text
   */
  italic?: boolean
  /**
   * OnClick handler for the element
   */
  onClick?: () => void
  /**
   * Children to be rendered inside the element
   */
  children?: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({
  elementType,
  disabled,
  editable,
  bold,
  italic,
  onClick,
  style,
  children,
  ...props
}: TypographyProps) => {

  const fontWeight = bold ? '500' : '300';

  const fontFamily = useContext(ThemeContext).typography?.fontFamily || 'sans-serif';

  return (
    <StyledTypography
    contentEditable={editable}
    onClick={() => onClick?.()}
    style={{
        fontStyle: italic ? 'italic' : 'normal',
        fontFamily,
        cursor: disabled ? 'not-allowed' : 'inherit',
      ...style,
      
    }}
    >
      {elementType == 1 && <StyledTypography1 style={{fontWeight:fontWeight, ...style}} {...props}>{children}</StyledTypography1>}
      {elementType == 2 && <StyledTypography2 style={{fontWeight:fontWeight, ...style}} {...props}>{children}</StyledTypography2>}
      {elementType == 3 && <StyledTypography3 style={{fontWeight:fontWeight, ...style}} {...props}>{children}</StyledTypography3>}
      {elementType == 4 && <StyledTypography4 style={{fontWeight:fontWeight, ...style}} {...props}>{children}</StyledTypography4>}
      {elementType == 5 && <StyledTypography5 style={{fontWeight:fontWeight, ...style}} {...props}>{children}</StyledTypography5>}
      {elementType == 6 && <StyledTypography6 style={{fontWeight:fontWeight, ...style}} {...props}>{children}</StyledTypography6>}
      {elementType == 'p' && <StyledTypographyp style={{fontWeight:fontWeight, ...style}} {...props}>{children}</StyledTypographyp>}

    </StyledTypography>
  )
}

export default Typography;
