import React, { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'

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
  children: React.ReactNode
  /**
   * Styling added to the element
   */

  style?: React.CSSProperties
}

const Typography: React.FC<TypographyProps> = ({
  elementType,
  editable = false,
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
  return (
    <div
      className={'twizzle-typography'}
      contentEditable={editable}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontStyle: italic ? 'italic' : 'normal',
        fontFamily: 'sans-serif',
        fontWeight: bold ? 'bold' : 'normal',
        color:type?theme.variants?.[type]?.color: theme.primary?.color || 'black',
        ...style
      }}
    >
      {elementType === 1 && (
        <h1 {...props} style={{ ...style, fontSize: '2.5rem' }}>
          {children}
        </h1>
      )}
      {elementType === 2 && (
        <h2 {...props} style={{ ...style, fontSize: '2rem' }}>
          {children}
        </h2>
      )}
      {elementType === 3 && (
        <h3 {...props} style={{ ...style, fontSize: '1.5rem' }}>
          {children}
        </h3>
      )}
      {elementType === 4 && (
        <h4 {...props} style={{ ...style, fontSize: '1.25rem' }}>
          {children}
        </h4>
      )}
      {elementType === 5 && (
        <h5 {...props} style={{ ...style, fontSize: '1rem' }}>
          {children}
        </h5>
      )}
      {elementType === 6 && (
        <h6 {...props} style={{ ...style, fontSize: '0.875rem' }}>
          {children}
        </h6>
      )}
      {elementType === 'p' && (
        <p {...props} style={{ ...style, fontSize: '0.875rem' }}>
          {children}
        </p>
      )}
    </div>
  )
}

export default Typography;
