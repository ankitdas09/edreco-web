import Heading from "../../../../../../global/components/heading";

import "./styles/index.scss";

interface PropTypes {
    text: string;
    class: string;
    img: string;
}

const CourseCard = (props: PropTypes) => {
    return (
        <div className="course-card">
            <div className="course-card-image-bottom">
                <img src={props.img} alt="" className="img-fluid" />
            </div>
            <div className="course-card-text-top">
                <Heading
                    text={props.class}
                    fontWeight={400}
                    font="PT Sans"
                    size="0.75rem"
                    maxWidth={100}
                    center={true}
                />
                <Heading
                    text={props.text}
                    fontWeight={700}
                    font="Montserrat"
                    size="1.1rem"
                    maxWidth={100}
                    center={true}
                />
            </div>
        </div>
    );
};

export default CourseCard;
