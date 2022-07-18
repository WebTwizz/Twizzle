import React, { useContext } from 'react'
import { ThemeContext } from '../../../../context/ThemeContext'

interface TypographyProps {
  elementType: 1 | 2 | 3 | 4 | 5 | 6 | 'p'
  copyable?: boolean
  editable?: boolean
  disabled?: boolean
  bold?: boolean
  italic?: boolean
  onClick?: () => void
  icon?: React.ReactNode
  type?: 'success' | 'info' | 'warning' | 'danger'
  children: React.ReactNode
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
