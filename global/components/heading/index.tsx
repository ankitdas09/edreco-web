import "./styles/index.scss";
interface PropTypes {
    text: string;
    secondaryText?: string;
    trailingText?: string;
    secondaryTextColor?: string;
    size: string;
    fontWeight: number;
    maxWidth: number | string;
    font: "Montserrat" | "PT Sans";
    padding?: string;
    color?: string;
    letterSpacing?: number;
    center?: boolean;
    underline?: boolean;
    mLeft?: string;
    pointerCursor?: boolean;
}
const Heading = (props: PropTypes) => {
    return (
        <p
            className="heading"
            style={{
                fontFamily: props.font,
                fontWeight: props.fontWeight,
                color: props.color ? props.color : "#464646",
                maxWidth: props.maxWidth,
                fontSize: props.size,
                padding: props.padding,
                letterSpacing: props.letterSpacing ? props.letterSpacing : "",
                textAlign: props.center ? "center" : "left",
                textDecoration: props.underline ? "underline" : "",
                marginLeft: props.mLeft ? props.mLeft : "0",
                cursor: props.pointerCursor === true ? "pointer" : "inherit",
            }}
        >
            {props.text}
            {props.secondaryText && (
                <span
                    style={{
                        color: props.secondaryTextColor ? props.secondaryTextColor : "#3E3E3E",
                        fontWeight: props.fontWeight,
                        fontFamily: props.font,
                    }}
                >
                    {props.secondaryText}
                </span>
            )}
            {props.trailingText && props.trailingText}
        </p>
    );
};

export default Heading;
