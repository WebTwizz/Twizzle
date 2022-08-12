import React,{ useState } from 'react';
// import './slider.css'
interface SliderProps {
    label?: string;
    disabled?: boolean;
    range: [number, number];
    position?: number;
    step?: number;
    onChange?: (value:number) => void;
    style?: React.CSSProperties;

}
const Slider: React.FC<SliderProps> = ({
    label,
    disabled,
    range,
    position = 0,
    step=1,
    onChange,
    style,
    ...props
}) => {

    const [value, setValue] = useState(position);
    
    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.valueAsNumber);
        if(onChange) {
            onChange(e.target.valueAsNumber)
        }

    }
    return (
        <div id='twizzle-slider' role="slider" aria-label="Slider" style={{
            display: 'flex',
            alignItems: 'center',
            margin: '5px'
            }}>
            <input type="range" 
            onChange={(e) => handleSliderChange(e)}
            id="twizzle-slider" 
                disabled={disabled} 
                min={range[0]} 
                max={range[1]} 
                value={value}
                step={step}
            style={{
                width: '100%',
                ...style,
            }}/>
            <span style={{background:'transparent', marginLeft:'5px'}}>{label}</span>
        </div>
    );
}

export default Slider;