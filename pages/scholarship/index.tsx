import "../../mainStyles.scss";
import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import Footer from "../../global/components/footer";
import ScrollToTop from "../../scrollToTop";
import Heading from "../../global/components/heading";
import ObjectiveCard from "./components/objective-card";
import Button from "../../global/components/btn";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

interface PropTypes {
    width: number;
    height: number;
}

const content = [
    {
        heading: "Upto 100% Scholarship",
        subHeading: "Based on E.A.S.T. Exam",
        img: "/scholarship-icons/15.png",
    },
    {
        heading: "10 out of 100",
        subHeading: "Free coaching for competitive Exam",
        img: "/scholarship-icons/16.png",
    },
    {
        heading: "Exposure",
        subHeading: "Top performing students get a chance to visit ISRO/IITs/AIIMSs free of cost",
        img: "/scholarship-icons/19.png",
    },
    {
        heading: "Upto Rs.1,00,000",
        subHeading: "Cash prize at national level",
        img: "/scholarship-icons/20.png",
    },
    {
        heading: "Media Coverage",
        subHeading: "At local and national level",
        img: "/scholarship-icons/18.png",
    },
    { heading: "Top 3", subHeading: "Exciting Prizes & Goodies", img: "/scholarship-icons/17.png" },
    {
        heading: "Participation",
        subHeading: "Certificate for all",
        img: "/scholarship-icons/certificate.svg",
    },
];
const contentObj = [
    {
        heading: "Centralized Exam",
        text: "E.A.S.T. offers a unified test for students from diverse backgrounds, ensuring fairness in opportunities based on performance.",
        img: "guidance.svg",
    },
    {
        heading: "Education Equity",
        text: "E.A.S.T. narrows the education gap by supporting talented students regardless of their socio-economic status.",
        img: "a-grade.svg",
    },
    {
        heading: "Guidance Hub",
        text: "E.A.S.T. provides valuable insights into learning paths and career options, helping students make informed choices.",
        img: "coaching.svg",
    },
    {
        heading: "Recognition Platform",
        text: "E.A.S.T. celebrates students' achievements beyond academics, motivating excellence in various fields.",
        img: "face-recognition.svg",
    },
];

const faqs = [
    {
        question: "What is E.A.S.T.?",
        answer: "Organized by EDRESCO, E.A.S.T. is an Edresco Admission cum Scholarship Test primarily to search talented candidates, provide recognition and exposure, and extend maximum support to the unprivileged and deserved through scholarships, so that more and more students can fulfill their dream of a better education.",
    },
    {
        question: "What is the Registration fees for E.A.S.T.?",
        answer: "E.A.S.T. is completely free of charge. No fee is required to register for the exam.",
    },
    {
        question: "When and how can I register for E.A.S.T. Online?",
        answer: "You can visit our site https://www.edresco.com/ and register by providing your contact number and clicking on the â€˜Sign upâ€™ button on the EDRESCO homepage. You will need to verify your contact number by providing the correct OTP. If the verification is completed successfully, you will be receiving your username and password in your registered contact number. Alternatively, you can connect to our customer support representative using our helpline number 7670070767.",
    },
    {
        question: "Can I register for E.A.S.T. Offline?",
        answer: "Yes, you can register for E.A.S.T. offline. The E.A.S.T. team will be visiting all the schools, coachings, and colleges to organize a seminar on E.A.S.T. and its benefits to students. After the seminar, the team will be distributing the registration forms among the students. The students will need to submit the duly filled registration form to the designated authority of their school within 24 hours.",
    },
    {
        question: "What is the mode of the E.A.S.T. 2023 exam?",
        answer: "E.A.S.T. exam will be conducted only in offline mode.",
    },
    {
        question: "Who is eligible to take E.A.S.T. 2023 exam?",
        answer: "Student who is studying from class 8th to class 12th, including droppers.",
    },
    {
        question: "What are the benefits of securing a good rank in E.A.S.T.?",
        answer: "Following are the benefits of securing a good rank in E.A.S.T.:a. Educational visit of 3-15 days to NASA/ISRO/top research colleges/universities of India.Edrescoâ€™s tie-up school. c. Convenient monthly fee payment option for students d. Know where you stand among the students from differents schools. e. News Media Coverage at the local and national level.",
    },
    {
        question: "What are the benefits of participating schools, coachings, and colleges?",
        answer: "If an Institute makes it to the list of top 3 schools on participation count, such Institutions will receive prize money of INR 25K (1st), 15K (2nd), and 10K (3rd) respectively. If the students from your Institute get selected for NASA/ISRO/IIT visits, this will bring a lot of media attention and coverage to your Institution which will result in Lakhs worth of Branding at PAN India level.",
    },
    {
        question: "Do I have to send the printout of the application form?",
        answer: "No, the print-out of the application form is not required to be sent to the E.A.S.T.",
    },
    {
        question: "When will I get my Admit Card?",
        answer: "Admit cards will be issued 15 days prior to the exam.",
    },
    {
        question: "What's the exam syllabus?",
        answer: "The E.A.S.T. exam does not have a defined syllabus for the exam preparation. There is no need of prerequisite preparation as it is not designed to test one's technical skills in math or science, but it's meant to test one's aptitude, his/her creativity in problem solving, and thinking outside the box.",
    },
    {
        question: "What is the duration of E.A.S.T. 2023 exam?",
        answer: "The exam duration is 30 minutes.",
    },
    {
        question:
            "What is the marking/grading scheme for E.A.S.T.? Is there negative marking for a wrong answer?",
        answer: "Each correct answer is awarded 4 marks. An incorrect answer fetches -1 mark. No marks are given or deducted for unattempted questions.",
    },
    {
        question: "When will E.A.S.T. 2023 result be declared?",
        answer: "E.A.S.T. 2023 exam result will be declared in the second week of December 2023 (tentative).",
    },
    {
        question:
            "In case of mistakes in the registration process E.A.S.T. 2023, how do I rectify them?",
        answer: "A few days before the E.A.S.T. exam, all students will be given an opportunity to check the information provided at the time of registration and rectify the errors. All students will be able to rectify the errors by login to their E.A.S.T. profile using username and password. Alternatively, you can connect to our customer support representative using our helpline number 7670070767.",
    },
    {
        question: "From where will I get the username and password of the E.A.S.T. portal?",
        answer: "All Students will receive their username and password via SMS/Email/Whatsapp within 7 days of registration in the contact number provided at the time of registration.",
    },
    {
        question:
            "It has been more than 10 days since I submitted my registration form in school, but I am yet to receive my username and password. What should I do?",
        answer: "You can call us at 76700700767 and enquire about your registration status. The support team will help you with the details.",
    },
    {
        question: "Will there be multiple levels in E.A.S.T. Examination?",
        answer: "Yes, E.A.S.T. 2023 will have two levels.",
    },
    {
        question: "What is Level - 2 of E.A.S.T. 2023 ?",
        answer: "The students who do well in Level - 1 qualify for Level - 2 of E.A.S.T.. It will either be an Interview round or an Assessment round. Further details about Level - 2 will be released on our official website, and all the participants will receive a communication regarding the same on their registered contact numbers.",
    },
    {
        question: "Will I get an alert before the E.A.S.T. exam/result ?",
        answer: "Yes, you will receive a reminder SMS/Email/Whatsapp from us. You can also call us on 7670070767 about it. The results will be declared on the second week of December 2023 (tentative), and you will receive an SMS/Email/Whatsapp for the same. Update regarding any amendment in result declaration date will be made available at https://www.edresco.com/.",
    },
    {
        question: "If I want to contact the E.A.S.T., what is the contact no or site ?",
        answer: "You can email us at edresco.official@gmail.com or call us at 7670070767 Our customer support team is available between 9 am-7 pm everyday.",
    },
];

const ScholarshipPage = (props: PropTypes) => {
    return (
        <section className="bg-blue">
            <ScrollToTop />
            <NavBar variant="white" />
            {props.width >= 600 ? <Space amt={80} /> : <Space amt={30} />}
            <div className="container bg-white drop-shadow rounded-rectangle">
                <div className="flex justify-around align-center east-container">
                    <div className="east-left">
                        <Heading
                            text="E.A.S.T."
                            font="Montserrat"
                            size="3rem"
                            fontWeight={900}
                            letterSpacing={8}
                            maxWidth={500}
                        />
                        <Heading
                            text="SCHOLARSHIP TEST"
                            font="Montserrat"
                            size="1.4rem"
                            fontWeight={400}
                            letterSpacing={8}
                            maxWidth={500}
                        />
                        <Space amt={30} />
                        <Heading
                            text="Organized by IITians,NITians grads, E.A.S.T. is an Edresco Admission cum Scholarship Test backed by the Edresco primarily to search talented candidates, provide recognition and exposure, and extend maximum support to the unprivileged and deserved through scholarships, so that more and more students can fulfill their dream of a better education."
                            font="PT Sans"
                            size="0.9rem"
                            fontWeight={400}
                            maxWidth={500}
                        />
                        <Space amt={10} />
                        <Heading
                            text="Support to the unprivileged and deserved through scholarships, so that more and more students can fulfill their dream of a better education."
                            font="PT Sans"
                            size="0.9rem"
                            fontWeight={400}
                            maxWidth={500}
                        />
                        <Space amt={30} />
                        <Button
                            text="Register"
                            bgColor="#0056B8"
                            fgColor="#fff"
                            width={150}
                            height={35}
                            type="filled"
                            linkTo="/register"
                        />
                    </div>
                    <div className="east-right">
                        <div className="img-container"></div>
                    </div>
                </div>
            </div>
            <Space amt={30} />
            <div className="benefits-container container">
                <div className="container flex justify-center align-center">
                    <Heading
                        text="Benefits for Students in Edresco (through E.A.S.T.)"
                        font="Montserrat"
                        size="1.4rem"
                        fontWeight={500}
                        maxWidth={600}
                        color="#fff"
                        center={true}
                    />
                </div>
                <Space amt={24} />
                <div className="container">
                    <div className="east-benefits-card-container flex justify-center align-center wrap">
                        {content.map((c) => (
                            <div className="east-benefit-card bg-white drop-shadow rounded-rectangle flex flex-column justify-center align-center hover-effect">
                                <div className="top">
                                    <img src={c.img} alt="" />
                                </div>
                                <div className="bottom">
                                    <Heading
                                        text={c.heading}
                                        font="PT Sans"
                                        size="1.14rem"
                                        fontWeight={800}
                                        maxWidth={280}
                                        center={true}
                                    />
                                    <Heading
                                        text={c.subHeading}
                                        font="PT Sans"
                                        size="0.9rem"
                                        fontWeight={500}
                                        maxWidth={260}
                                        center={true}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={15} />}
            <div className="objectives-of-east bg-white drop-shadow container rounded-rectangle">
                <Space amt={30} />
                <Heading
                    text="Objectives of EAST"
                    font="Montserrat"
                    size="1.4rem"
                    fontWeight={600}
                    maxWidth={"100%"}
                    center={true}
                    underline={true}
                />
                <div className="objectives grid-2c">
                    {contentObj.map((c) => (
                        <ObjectiveCard img={c.img} heading={c.heading} text={c.text} />
                    ))}
                </div>
                <Space amt={30} />
            </div>
            <div className="container">
                <Space amt={30} />
                <Heading
                    text="Frequently Asked Questions"
                    font="Montserrat"
                    size="1.4rem"
                    fontWeight={600}
                    maxWidth={"100%"}
                    center={true}
                    // underline={true}
                    color="#fff"
                />
                <Space amt={30} />
                <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                    {faqs.map((c) => {
                        return (
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>{c.question}</AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="bg-white p-10">
                                    <p>{c.answer}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
            {props.width >= 600 ? <Space amt={30} /> : <Space amt={15} />}
            <Footer />
        </section>
    );
};

export default ScholarshipPage;
