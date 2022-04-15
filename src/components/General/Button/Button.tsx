import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import './button.css'

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  outlined?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: React.ReactNode;
  icon?: React.ReactNode;
  corner?: 'default' | 'round';
  variant?: 'success' | 'info' | 'warning' | 'danger'
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  label,
  outlined,
  style,
  disabled,
  loading,
  icon,
  corner,
  variant,
  ...props
}: ButtonProps) => {
  const theme = useContext(ThemeContext)
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onMouseEnter={()=>{ setHover(true); }}
      onMouseLeave={()=>{ setHover(false); }}
      className={`${outlined ? 'twizzle-button-outlined' : 'twizzle-button'}${
        disabled ? '-disabled' : ''
      }`}
      {...props}
      style={{
        borderRadius: corner === 'round' ? '30px' : '5px',
        backgroundColor: disabled
          ? '#EBEBE4'
          : outlined
            ? 
            hover
            ? variant? 
            theme?.variants?.[variant]?.color
            :theme?.primary?.backgroundColor
            :'white'
            : variant? 
            theme?.variants?.[variant]?.color
            : 'theme?.primary?.backgroundColor',
        color: 
          outlined ? 
          hover? 
          'white' 
          : variant? 
            theme?.variants?.[variant]?.color
            :theme?.primary?.backgroundColor 
            : 'white',
        filter: hover?'brightness(0.8)':'brightness(1)',
        margin: '5px',
        ...style
      }}
      disabled={disabled}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        {loading}
        {icon}
        {label}
      </div>
    </button>
  )
}

export { Button }
