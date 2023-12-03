import Card from "./components/card";
import Heading from "../../../../global/components/heading";
import Space from "../../../../global/components/space";
import "./styles/index.scss";

const content: { heading: string; subheading: string; imgLink: string }[] = [
    {
        heading: "100% Scholarship",
        subheading: "Based on E.A.S.T. Exam",
        imgLink: "unlimited_access.png",
    },
    {
        heading: "Online Resources",
        subheading: "Access to unlimited all India test series packages",
        imgLink: "anywhere.png",
    },
    {
        heading: "Expert Teachers",
        subheading: "Highly Experienced and Dedicated Faculties",
        imgLink: "expert_teachers.png",
    },
    {
        heading: "Specialized Mentoring",
        subheading: "Anonymous mentoring and counselling from IITian/NITians",
        imgLink: "individualised_sessions.png",
    },
    {
        heading: "Competitive Exam Support",
        subheading: "Special classes are designed for exams like Olympiads, NTSE etc.",
        imgLink: "exam-support.png",
    },
];

const GoalsSection = () => {
    return (
        <div className="container flex justify-center align-center">
            <div className="goals">
                <Heading
                    text="Achieve your goals with us!"
                    maxWidth={1300}
                    size="1.8rem"
                    fontWeight={600}
                    font={"Montserrat"}
                    padding={"0 20px"}
                    color="#38632b"
                    center={true}
                />
                <Space amt={10} />
                <div className="card-container">
                    {content.map((c, idx) => (
                        <Card
                            width={350}
                            height={180}
                            heading={c.heading}
                            subHeading={c.subheading}
                            imgLink={c.imgLink}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GoalsSection;
