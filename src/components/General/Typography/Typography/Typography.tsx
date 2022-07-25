import React, { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'
import { StyledTypography } from './StyledTypography'

interface TypographyProps {

  /**
   * Element to be rendered
   * Numbers indicate the size of the element
   */
  elementType: 1 | 2 | 3 | 4 | 5 | 6 | 'p'
  /**
   * The ability of the element to be copied to the clipboard
   */
  copyable?: boolean
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
   * icon displayed on the left of the element
   */
  icon?: React.ReactNode
  /**
   * variant of the element chosen from the theme
   */
  type?: 'success' | 'info' | 'warning' | 'danger'
  /**
   * Children to be rendered inside the element
   */
  children?: React.ReactNode
  /**
   * Styling added to the element
   */

  style?: React.CSSProperties
}

const Typography: React.FC<TypographyProps> = ({
  elementType,
  disabled,
  bold,
  italic,
  onClick,
  icon,
  style,
  type,
  children,
  ...props
}: TypographyProps) => {
  const theme = useContext(ThemeContext)

  const textSize= {
    1: '2.5rem',
    2: '2rem',
    3: '1.5rem',
    4: '1.25rem',
    5: '1rem',
    6: '0.875rem',
    p: '0.875rem'
  }

  return (
    <StyledTypography
      className={'twizzle-typography'}
      onClick={onClick}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontStyle: italic ? 'italic' : 'normal',
        fontFamily: 'sans-serif',
        fontWeight: bold ? 'bold' : 'normal',
        color:'black',
        ...style
      }}
      height={textSize[elementType]}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography;
