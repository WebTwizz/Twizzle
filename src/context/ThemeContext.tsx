import React from 'react'

export interface variant {
    type: string;
    color: string;
}
interface Theme {
    primary?: {
        backgroundColor: string,
        color: string
    },
    secondary?: {
        backgroundColor: string,
        color: string
    },
    loader?: {
        color: string,
    },

    variants?: {
        'success': {color: string},
        'info': {color: string},
        'warning': {color: string},
        'danger': {color: string}
    };

}
export const ThemeContext = React.createContext<Theme>({
  primary: {
    backgroundColor: '#1E90FF',
    color: 'black'
  },
  loader: {
    color: '#1E90FF'
  },
  variants: {
    success: { color: '#339900' },
    info: { color: '#99CC33' },
    warning: { color: '#FFCC00' },
    danger: { color: '#CC3300' }
  }

})
