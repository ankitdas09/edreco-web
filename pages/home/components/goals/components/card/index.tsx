import Heading from "../../../../../../global/components/heading";
import Space from "../../../../../../global/components/space";
import "./styles/index.scss";

interface PropTypes {
    width: number;
    height: number;
    heading: string;
    imgLink: string;
    subHeading?: string;
}
const Card = (props: PropTypes) => {
    return (
        <div
            className="card"
            style={{
                width: props.width,
                height: props.height,
                // boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.122)",
                // backgroundColor: "#fff",
                borderRadius: 10,
                margin: 10,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom: "20px",
            }}
        >
            <div className="goals-card-img-container">
                <img src={props.imgLink} alt="" />
            </div>
            <Space amt={10} />
            <Heading
                text={props.heading}
                size="1.35rem"
                fontWeight={700}
                maxWidth={200}
                font={"PT Sans"}
                center={true}
            />
            {props.subHeading && (
                <Heading
                    text={props.subHeading}
                    size="0.9rem"
                    fontWeight={400}
                    maxWidth={200}
                    font={"PT Sans"}
                    center={true}
                />
            )}
        </div>
    );
};

export default Card;
