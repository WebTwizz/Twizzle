interface RateProps {
    icon: React.ReactNode;
    disabled?: boolean;
    rating: number;
    onRate?: (rating: number) => void;
    color?: string;
    style?: React.CSSProperties;
}
//create rate component
const Rate: React.FC<RateProps> = ({
    disabled,
    rating,
    onRate,
    style,
}) => {
    const handleRateChange = (rating: number) => {
        if (onRate) {
            onRate(rating);
        }
    };
    return (
        <div className="rate" style={style}>
            <input
                type="radio"
                name="rate"
                value="1"
                checked={rating === 1}
                onChange={(e) => handleRateChange(e)}
                disabled={disabled}
            />
            <input
                type="radio"
                name="rate"
                value="2"
                checked={rating === 2}
                onChange={(e) => handleRateChange(e)}
                disabled={disabled}
            />
            <input
                type="radio"
                name="rate"
                value="3"
                checked={rating === 3}
                onChange={(e) => handleRateChange(e)}
                disabled={disabled}
            />
            <input
                type="radio"
                name="rate"
                value="4"
                checked={rating === 4}
                onChange={(e) => handleRateChange(e)}
                disabled={disabled}
            />
            <input
                type="radio"
                name="rate"
                value="5"
                checked={rating === 5}
                onChange={(e) => handleRateChange(e)}
                disabled={disabled}
            />
        </div>
    );
};

export {Rate};