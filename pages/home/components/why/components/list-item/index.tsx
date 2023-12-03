import Heading from "../../../../../../global/components/heading";
import "./styles/index.scss";
interface PropTypes {
    text: string;
}
const ListItem = (props: PropTypes) => {
    return (
        <div className="list-item">
            <div className="list-item-check-container">
                {/* <img src="list-item-check.png" alt="green check image" /> */}
            </div>
            <Heading
                text={props.text}
                size="1.1rem"
                font="PT Sans"
                fontWeight={400}
                maxWidth={500}
            />
        </div>
    );
};

export default ListItem;
