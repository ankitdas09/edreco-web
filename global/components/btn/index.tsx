// import { useNavigate } from "react-router-dom";
import "./styles/index.scss";
import { useRouter } from "next/navigation";

interface PropTypes {
    text: string;
    width: number;
    height: number;
    type: "filled" | "outlined";
    bgColor: string;
    fgColor: string;
    linkTo?: string;
    disabled?: boolean;
    fontSize?: string;
}

const Button = (props: PropTypes) => {
    // const navigate = useNavigate();
    const navigate = useRouter();

    return (
        <button
            className="btn hover-effect"
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.type === "filled" ? props.bgColor : "#fff",
                color: props.fgColor,
                border: props.type === "filled" ? "none" : "1px solid",
                borderRadius: 5,
                fontWeight: 700,
                cursor: "pointer",
                fontSize: props.fontSize,
            }}
            disabled={props.disabled ? props.disabled : false}
            onClick={() => {
                if (!props.linkTo) return;
                navigate.push(props.linkTo);
            }}
        >
            {props.text}
        </button>
    );
};

export default Button;
