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
        heading: "Orientation Classes",
        text: "Orientation classes are conducted for students to motivate them and make them familiar with the institute.",
    },
    {
        heading: "Performance Tracker",
        text: "Every student’s progress is tracked by giving a constant feedback on their performance in the tests.",
    },
    {
        heading: "Feedback System",
        text: "Regular feedbacks are taken by the students in order to improve the learning process qualitatively and listen to all student’s queries.",
    },
];

const subjects = [
    "➢  Physics",
    "➢  Chemistry",
    "➢  Mathematics",
    "➢  Biology",
    "➢  (MIL) Assamese",
    "➢  English",
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

const FresherInfo = () => {
    return (
        <>
            <NavBar variant="white" />

            <div className="bg-course-info">
                {absIcons.map((c) => {
                    return <AbsIcon top={c.top} left={c.left} icon={c.icon} />;
                })}
                <div className="container-sm" id="FRESHER">
                    <Heading
                        text="Class XI"
                        font="Montserrat"
                        size="1rem"
                        fontWeight={600}
                        maxWidth={"100%"}
                    />
                    <Heading
                        text="Why FRESHER?"
                        font="Montserrat"
                        size="2rem"
                        fontWeight={600}
                        maxWidth={"100%"}
                    />
                    <Space amt={30} />
                    <div className="border">
                        <Heading
                            text="📚 'FRESHER' Course is specially designed for giving an early advantage to the students by starting JEE/NEET preparation immediately after 10th Board Examination. This course places a distinct focus on building a strong foundation aligned with the JEE and NEET syllabus and pattern. Furthermore, students will receive comprehensive mentoring for their class 11th & 12th studies, coupled with targeted guidance for excelling in additional competitive exams like Olympiads etc."
                            font="PT Sans"
                            size="1.2rem"
                            fontWeight={400}
                            maxWidth={"800px"}
                        />
                        <Space amt={20} />
                        <Heading
                            text="📝 Students joining this program have more time to clear their fundamentals and practice extensively for JEE/NEET, their ultimate goal!"
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
                    text="What is an integrated school program?"
                    font="Montserrat"
                    size="1.2rem"
                    fontWeight={600}
                    maxWidth={"100%"}
                    underline={true}
                />
                <Space amt={30} />
                <Heading
                    text="• A study program with a synergistic approach to both the School / Board studies as well as JEE Main & Advanced, NEET, Other Competitive Entrance Exams preparation."
                    font="PT Sans"
                    size="1rem"
                    fontWeight={400}
                    maxWidth={"100%"}
                />
                <Heading
                    text="• A study plan that will ease out the pressure of time (or the feeling for the lack of it) for the Student, unlocking lots of extra time, giving enough time for self-studies, which a Student would not have got otherwise and also giving him sufficient time for co-curricular activities, self-study, sports, social activities etc. which are so important for his / her personality development."
                    font="PT Sans"
                    size="1rem"
                    fontWeight={400}
                    maxWidth={"100%"}
                />
                <Heading
                    text="• A program that eliminates the opposite pressure forces on the Student."
                    font="PT Sans"
                    size="1rem"
                    fontWeight={400}
                    maxWidth={"100%"}
                />
                <Space amt={30} />
                <Heading
                    text="Subjects Offered in FRESHER - Two Year Integrated School Program:"
                    font="Montserrat"
                    size="1.2rem"
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

export default FresherInfo;
