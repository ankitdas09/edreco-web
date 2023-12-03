import Button from "../../../../../../global/components/btn";
import Heading from "../../../../../../global/components/heading";
import Space from "../../../../../../global/components/space";
import CourseListItem from "./components/course-list-item";
import "./styles/index.scss";

const CourseInfoCard = (props: {
    courseName: string;
    courseSubHeading: string;
    content: string[];
}) => {
    return (
        <div className="course-info-card">
            <div className="info-card-top">
                <Space amt={20} />
                <Heading
                    text={props.courseSubHeading}
                    size="0.75rem"
                    color="#0056B8"
                    fontWeight={700}
                    font="PT Sans"
                    maxWidth={500}
                    letterSpacing={3}
                    center={true}
                />
                <Space amt={5} />
                <Heading
                    text={props.courseName}
                    size="1.4rem"
                    color="#0056B8"
                    fontWeight={700}
                    font="Montserrat"
                    maxWidth={500}
                    letterSpacing={3}
                    center={true}
                />
                <Space amt={10} />
                <div className="line"></div>
                <Space amt={15} />
                <div className="course-list-item-container">
                    {props.content && props.content.map((c) => <CourseListItem text={c} />)}
                </div>
            </div>
            <div className="info-card-bottom">
                {props.courseName && (
                    <Button
                        text="More info"
                        width={120}
                        height={35}
                        type="outlined"
                        bgColor="#0056B8"
                        fgColor="#0056B8"
                        linkTo={`/info/${props.courseName.toLowerCase()}`}
                    />
                )}
                <Space amt={30} />
            </div>
        </div>
    );
};

export default CourseInfoCard;
