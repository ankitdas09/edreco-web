import Heading from "../../../../global/components/heading";
import "./styles/index.scss";
interface propTypes {
    heading: string;
    text: string;
    img: string;
}
const ObjectiveCard = (props: propTypes) => {
    return (
        <div className="objective-card">
            <div className="objective-container flex">
                <div className="obj-img">
                    <img src={props.img} alt="" className="east-objective-icon" />
                </div>
                <div className="obj-body">
                    <Heading
                        text={props.heading}
                        font="Montserrat"
                        size="1rem"
                        fontWeight={600}
                        maxWidth={"100%"}
                    />
                    <Heading
                        text={props.text}
                        font="PT Sans"
                        size="0.9rem"
                        fontWeight={400}
                        maxWidth={"100%"}
                    />
                </div>
            </div>
        </div>
    );
};

export default ObjectiveCard;
