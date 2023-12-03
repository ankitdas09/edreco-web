import "../../../mainStyles.scss";
import Space from "../../../global/components/space";

import Heading from "../../../global/components/heading";
import Button from "../../../global/components/btn";
import AbsIcon from "../../../global/components/abs-icon";
import "./index.scss";
import NavBar from "@/global/components/navbar";
// interface PropTypes {
//     width: number;
//     height: number;
// }

const benefits = [
    {
        heading: "Excellent Faculty",
        text: "Highly Experienced and Dedicated Faculty members who help students in every aspect of their study life.",
    },
    {
        heading: "Computer Based Tests",
        text: "FREE access to all India test series (online test) for better practice of our students",
    },
    { heading: "Doubt Classes", text: "1 on 1 doubt classes are conducted for students." },
    {
        heading: "Doubt Classes ",
        text: "1 on 1 doubt classes are conducted for students.",
    },
    {
        heading: "Board Improvement Program",
        text: "Complete Syllabus Coverage from Board to Entrance Examinations. Special classes for the students who are improving in any subject of board.",
    },
    {
        heading: "Competitive Exam Support",
        text: "Special classes are designed for other exams like Olympiads, NTSE etc.",
    },
    {
        heading: "Chapterwise Practice Problems",
        text: "Designed for a student’s self-understanding of a topic. CPPs are handed over to the students for practice.",
    },
    {
        heading: "Weekly Tests",
        text: "Weekly Tests are conducted regularly, allowing students to solve all kinds of questions asked in the board exams and competitive exams.",
    },
    {
        heading: "Motivational Sessions",
        text: "There is provision of motivational classes within the curriculum which is required to keep the students on track and motivate them to aspire for success.",
    },
    {
        heading: "Parent Teacher Student Meet",
        text: "PTSM fosters regular communication between parents, teachers, and students, providing parents with insights into their child's strengths and weaknesses.",
    },
    {
        heading: "Student Relationship Manager (SRM)",
        text: "It is basically a WhatsApp contact number dedicated to connecting with parents, providing updates, test schedules, homework information, student’s progress report, information about competitive  exams etc.",
    },
    {
        heading: "Psychological cum Academic Counselling",
        text: "Sometimes students get stuck with their personal problems and need guidance to overcome that situation. In such cases, we offer one-on-one counseling sessions and provide tailored solutions to assist them.",
    },
];

const subjects = [
    "➢  General Science",
    "➢  General Mathematics",
    "➢  Social Science",
    "➢  MIL (Assamese)",
    "➢  English",
    "➢  ADV. Mathematics/Sanskrit /Hindi",
];

const absIcons = [
    { top: "0", left: "0px", icon: "./abs-icons/Group 380.png" },
    { top: "20px", left: "240px", icon: "./abs-icons/abs-icon.png" },
    { top: "-40px", left: "480px", icon: "./abs-icons/abs-icon2.png" },
    { top: "-20px", left: "1260px", icon: "./abs-icons/Group (6).png" },
    { top: "200px", left: "1260px", icon: "./abs-icons/Group (8).png" },
    { top: "360px", left: "1100px", icon: "./abs-icons/Group (10).png" },
    { top: "350px", left: "500px", icon: "./abs-icons/Group (11).png" },
    { top: "360px", left: "200px", icon: "./abs-icons/Group (13).png" },
    { top: "350px", left: "-35px", icon: "./abs-icons/Group (7).png" },
];
const DishaInfo = () => {
    return (
        <>
            <NavBar variant="white" />

            <div className="bg-course-info">
                {absIcons.map((c) => {
                    return <AbsIcon top={c.top} left={c.left} icon={c.icon} />;
                })}
                <div className="container-sm" id="DISHA">
                    <Heading
                        text="Class X"
                        font="Montserrat"
                        size="1rem"
                        fontWeight={600}
                        maxWidth={"100%"}
                    />
                    <Heading
                        text="Why PARISHRAM?"
                        font="Montserrat"
                        size="2rem"
                        fontWeight={600}
                        maxWidth={"100%"}
                    />
                    <Space amt={30} />
                    <div className="border">
                        <Heading
                            text="📚 'PARISHRAM' Course is specially designed for school boards and competitive exams like NEET, JEE Main, JEE Advanced etc. and helps students to easily adapt to the exponential increase in the level of academics in Class 11th & 12th. Class 10th is the crucial level in their life. Special attention is given to the NTSE & Board with specific batches with solely dedicated faculty members who foster them with all the minute details required for the exams. At the end, what we get is the PARISHRAM of our school study level."
                            font="PT Sans"
                            size="1.2rem"
                            fontWeight={400}
                            maxWidth={"800px"}
                        />
                        <Space amt={30} />
                        <Heading
                            text="📝 This program is based on school methodology. The main purpose is to cover NCERT syllabus & to provide them knowledge for competitive examinations."
                            font="PT Sans"
                            size="1.2rem"
                            fontWeight={400}
                            maxWidth={"800px"}
                        />
                        <Space amt={30} />
                    </div>
                    <Space amt={50} />
                </div>
            </div>
            <div className="container-sm">
                <Space amt={30} />
                <Heading
                    text="What are the Course Benefits?"
                    font="Montserrat"
                    size="1.5rem"
                    fontWeight={600}
                    maxWidth={"100%"}
                    underline={true}
                />
                <Space amt={30} />
                <ul className="benefits-container">
                    {benefits.map((c, idx) => (
                        <li key={idx} className="benefit-card">
                            <Heading
                                text={c.heading}
                                font="Montserrat"
                                size="1rem"
                                fontWeight={600}
                                maxWidth={"100%"}
                            />
                            <Space amt={10} />
                            <Heading
                                text={c.text}
                                font="PT Sans"
                                size="0.9rem"
                                fontWeight={400}
                                maxWidth={"800px"}
                            />
                            <Space amt={30} />
                        </li>
                    ))}
                </ul>
                <Space amt={30} />
                <Heading
                    text="Subjects offered in Parishram"
                    font="Montserrat"
                    size="1.5rem"
                    fontWeight={600}
                    maxWidth={"100%"}
                    underline={true}
                />
                <Space amt={30} />
                <ul>
                    {subjects.map((c, idx) => (
                        <li key={idx}>
                            <Heading
                                text={c}
                                font="PT Sans"
                                size="1rem"
                                fontWeight={400}
                                maxWidth={"100%"}
                            />
                            {/* <Space amt={30} /> */}
                        </li>
                    ))}
                </ul>
                <Space amt={30} />
                <Heading
                    text="Class Schedule & Frequency:"
                    font="Montserrat"
                    size="1.2rem"
                    fontWeight={600}
                    maxWidth={"100%"}
                    underline={true}
                />
                <Space amt={30} />
                <ul>
                    <li>
                        <Heading
                            text={
                                "Classes will be conducted in the associated school in the form of a separate section; generally, from about 8:00 am to 4:00 pm for 6 days a week (exact schedule will depend upon the associated school)."
                            }
                            font="PT Sans"
                            size="1rem"
                            fontWeight={400}
                            maxWidth={"100%"}
                        />
                        {/* <Space amt={30} /> */}
                    </li>
                </ul>
                <Space amt={60} />

                <Button
                    text="Join Now!"
                    width={170}
                    height={45}
                    type="filled"
                    bgColor="#0056B8"
                    fgColor="#fff"
                    linkTo="/register"
                    fontSize="1.0rem"
                />
            </div>
        </>
    );
};

export default DishaInfo;
