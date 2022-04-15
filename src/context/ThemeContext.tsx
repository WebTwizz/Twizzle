import React from "react";

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
    }
}
export const ThemeContext = React.createContext<Theme>({
    primary: {
        backgroundColor: '#1E90FF',
        color: 'black'
    },
    loader: {
        color: '#1E90FF'
    }
});
