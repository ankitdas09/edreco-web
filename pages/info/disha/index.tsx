import "../../../mainStyles.scss";
import Space from "../../../global/components/space";

import Heading from "../../../global/components/heading";
import Button from "../../../global/components/btn";
import AbsIcon from "../../../global/components/abs-icon";
import "./index.scss";
import NavBar from "@/global/components/navbar";
import Head from "next/head";
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
        heading: "Competitive Exam Support ",
        text: "Special classes are designed for other exams like Olympiads, NTSE etc.",
    },
    {
        heading: "Discussion of Homework",
        text: "After classroom teaching, homework is given to students, which is discussed in the next class of that particular subject.",
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
            <Head>
                <title>Edresco - Disha</title>
            </Head>
            <NavBar variant="white" />
            <div className="bg-course-info">
                {absIcons.map((c) => {
                    return <AbsIcon top={c.top} left={c.left} icon={c.icon} />;
                })}
                <div className="container-sm" id="DISHA">
                    <Heading
                        text="Class X"
                        font="PT Sans"
                        size="1rem"
                        fontWeight={800}
                        maxWidth={"100%"}
                    />
                    <Heading
                        text="Why DISHA?"
                        font="Montserrat"
                        size="2rem"
                        fontWeight={600}
                        maxWidth={"100%"}
                    />
                    <Space amt={30} />
                    <div className="border">
                        <Heading
                            text="📚 DISHA Course is designed for the students moving from class 8th to 9th, aiming to establish a
                    strong conceptual foundation. It is a scientifically designed classroom program to build the foundation
                    systematically for various Engineering (IIT JEE Mains & IIT JEE Advanced) and Medical (NEET & AIIMS)
                    Entrance Examinations as well as various other competitive Examinations like NTSE/JSTSE/KVPY and
                    Olympiads. In the competitive world ahead, every year is important. students who succeed in
                    JEE/NEET in the very first attempt itself, save it and invest this time in making their future brighter.
                    Many of the chapters and concepts that are part of the JEE/NEET syllabus are introduced to the
                    students in class 8th, class 9th & class 10th and taught in class 11th & class 12th. So, the best way is to
                    start your IIT-JEE/NEET preparation from the beginning of class 8th. It’s never late with Edresco’s
                    scientifically designed Foundation Two Years Classroom Program for Class 9th."
                            font="PT Sans"
                            size="1.2rem"
                            fontWeight={400}
                            maxWidth={"80%"}
                        />
                        <Space amt={20} />
                        <Heading
                            text="📝This Program operates in alignment with school curriculum principles. Its primary objectives are
                    to cover the NCERT syllabus comprehensively and to equip students with the knowledge required for
                    competitive examinations."
                            font="PT Sans"
                            size="1.2rem"
                            fontWeight={400}
                            maxWidth={"800px"}
                        />
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
                    text="Subjects offered in DISHA"
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
                    size="1.5rem"
                    fontWeight={600}
                    maxWidth={"100%"}
                    underline={true}
                />
                <Space amt={30} />
                <ul>
                    <li>
                        <Heading
                            text={
                                "Classes will be conducted in the associated school in the form of a separate section; generally, from about 8:00 am to 4:00 pm for 6 days a week (exact schedule will depend upon the associated school."
                            }
                            font="PT Sans"
                            size="1rem"
                            fontWeight={400}
                            maxWidth={"100%"}
                        />
                        {/* <Space amt={30} /> */}
                    </li>
                </ul>
                <Space amt={30} />
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
