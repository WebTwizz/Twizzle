import { useCallback, useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import "./toggle.css";
interface ToggleProps {
    label?: string;
    disabled?: boolean;
    toggled?: boolean;
    color?: string;
    onToggle?: (value: boolean) => void;
    style?: React.CSSProperties;
}
const Toggle: React.FC<ToggleProps> = ({
    label,
    disabled,
    style,
    toggled = false,
    onToggle,
    color,
    ...props
}) => {
    const theme = useContext(ThemeContext);
    const [toggledState, setToggledState] = useState(toggled);

    const handleToggle = useCallback((e:  React.ChangeEvent<HTMLInputElement>) => {
        setToggledState(e.target.checked);
        if (onToggle) {
            onToggle(e.target.checked);
        }
    },[]);
    return (
        <div id='twizzle-toggle-switch' role="switch" aria-label="Toggle" style={{
            display: 'flex',
            alignItems: 'center',
            fontFamily: 'sans-serif',
            margin: '5px'
            }}>
            <input 
            checked= {toggledState} 
            disabled={disabled} 
            type="checkbox" 
            id="twizzle-toggle"  
            {...props}  
            onChange={(e)=> handleToggle(e)}/>
            <label htmlFor="twizzle-toggle"
            style={{
                backgroundColor: toggledState? color || theme.primary?.backgroundColor : '#D3D3D3',
                ...style,
            }}></label>
            <span style={{background:'transparent', marginLeft:'5px'}}>{label}</span>
        </div>

            
    );
}

export default Toggle;