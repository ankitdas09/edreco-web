import Heading from "../../../../global/components/heading";
import Space from "../../../../global/components/space";
import ListItem from "./components/list-item";
import "./styles/index.scss";

const content = [
    "Complete Syllabus Coverage - From Board to Entrance Examinations",
    "Experimental Teaching",
    "One to One Doubt Clearance",
    "Chapter Practice Problems (CPP) Sheet",
    "Scholarships and Cashback Benefits",
    "Fee refund policy",
];

const WhySection = () => {
    return (
        <div className="why-container container flex">
            <div className="why-left">
                <div className="why-img-container">
                    <img src="why-edresco-img.png" alt="" />
                </div>
            </div>
            <div className="why-right">
                <Heading
                    text="Why Choose Edresco?"
                    size="1.8rem"
                    fontWeight={600}
                    font="Montserrat"
                    maxWidth={1000}
                />
                <Space amt={20} />
                <div className="list-item-container">
                    {content.map((c, idx) => (
                        <ListItem text={c} key={idx} />
                    ))}
                </div>
                <Space amt={20} />
                <Heading
                    text={"And many more benefits!"}
                    size="1.15rem"
                    font="PT Sans"
                    fontWeight={400}
                    maxWidth={500}
                />
            </div>
        </div>
    );
};

export default WhySection;
