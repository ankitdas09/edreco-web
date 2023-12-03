import "../../mainStyles.scss";
import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";

import Footer from "../../global/components/footer";

import ScrollToTop from "../../scrollToTop";
import Heading from "../../global/components/heading";
import { motion } from "framer-motion";

interface PropTypes {
    width: number;
    height: number;
}

<motion.div
    // ref={goalsRef}
    variants={{
        initial: { opacity: 0, y: "100" },
        final: { opacity: 1, y: 0 },
    }}
    initial="initial"
    whileInView="final"
    viewport={{ once: true }}
    transition={{ duration: 1 }}
></motion.div>;
const AboutPage = (props: PropTypes) => {
    console.log(props);
    return (
        <section className="">
            <ScrollToTop />
            <NavBar variant="white" />
            <Space amt={30} />
            <div className="container-sm">
                <motion.div className="flex justify-center align-center column-on-mobile">
                    <div className="about-left flex-3">
                        <Heading
                            text="ABOUT US"
                            letterSpacing={8}
                            fontWeight={800}
                            size="0.75rem"
                            maxWidth={300}
                            font="Montserrat"
                            mLeft="3px"
                        />
                        <Space amt={10} />
                        <Heading
                            text="We Empower "
                            secondaryText="Education  "
                            trailingText="for a Brighter Tomorrow."
                            secondaryTextColor="#4A7D3A"
                            letterSpacing={0}
                            fontWeight={300}
                            size="1.8rem"
                            maxWidth={300}
                            font="Montserrat"
                        />
                        <Space amt={10} />
                        <Heading
                            text="Edresco is a platform based in India, dedicated to providing comprehensive educational services to students preparing for a wide range of academic challenges. We understand that quality education is the cornerstone of a brighter future, and we are passionately committed to making this accessible to every student."
                            letterSpacing={0}
                            fontWeight={400}
                            size="1rem"
                            maxWidth={"85%"}
                            font="PT Sans"
                        />
                    </div>
                    <div className="about-right flex-2">
                        <img src="11.png" className="img-fluid" />
                    </div>
                </motion.div>
                <div className="flex justify-center align-center">
                    <div className="line"></div>
                </div>
                <Space amt={60} />
                <div className="flex justify-center align-center column-reverse-on-mobile">
                    <div className="about-left flex-3">
                        <img src="10.png" className="img-fluid" />
                    </div>
                    <div className="about-right flex-2">
                        <Heading
                            text="OUR MISSION"
                            letterSpacing={8}
                            fontWeight={800}
                            size="0.75rem"
                            maxWidth={300}
                            font="Montserrat"
                            mLeft="3px"
                        />
                        <Space amt={10} />
                        <Heading
                            text="Quality education "
                            secondaryText="affordable and accessible "
                            trailingText="for everyone"
                            secondaryTextColor="#0056B8"
                            letterSpacing={0}
                            fontWeight={300}
                            size="1.8rem"
                            maxWidth={300}
                            font="Montserrat"
                        />
                        <Space amt={10} />
                        <Heading
                            text="Our mission is to empower students by providing them with high-quality, accessible, and personalized education. We are dedicated to bridging the education gap, fostering a deep love for learning, and helping students achieve their dreams. "
                            letterSpacing={0}
                            fontWeight={400}
                            size="1rem"
                            maxWidth={"85%"}
                            font="PT Sans"
                        />
                        <Space amt={10} />
                        <Heading
                            text="Our commitment is to create a brighter tomorrow through innovative, student-centric, and technology-driven educational solutions."
                            letterSpacing={0}
                            fontWeight={400}
                            size="1rem"
                            maxWidth={"85%"}
                            font="PT Sans"
                        />
                        {/* <Heading
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. "
                            letterSpacing={0}
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={"85%"}
                            font="PT Sans"
                        /> */}
                    </div>
                </div>
            </div>
            <Space amt={60} />
            <div className="bg-about-highlight">
                <div className="bg-triangle-container">
                    <img src="./bg-triangle.png" />
                </div>
                <motion.div
                    className="container-sm"
                    variants={{
                        initial: { opacity: 0, y: "100" },
                        final: { opacity: 1, y: 0 },
                    }}
                    initial="initial"
                    whileInView="final"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Space amt={12} />
                    <div className="flex justify-center align-start column-on-mobile">
                        <div className="about-left flex-3">
                            <Heading
                                text="Our "
                                secondaryText="Values"
                                secondaryTextColor="#4A7D3A"
                                letterSpacing={0}
                                fontWeight={300}
                                size="2rem"
                                maxWidth={300}
                                font="Montserrat"
                            />
                            <Space amt={10} />
                            <Heading
                                text="Our values are the guiding principles that drive our entire community. We believe in nurturing individuality, recognizing that each student is unique, and we are committed to providing accessible, innovative, and personalized education to enable them to lead happy careers and fulfilling lives."
                                letterSpacing={0}
                                fontWeight={400}
                                size="1rem"
                                maxWidth={"85%"}
                                font="PT Sans"
                            />
                            <Space amt={10} />
                            <Heading
                                text=" Our vision is not only to empower students but also to contribute to the prosperity of our nation through education. We work collectively to ensure that our students can realize their full potential, thereby shaping a more productive and promising future for themselves and our society."
                                letterSpacing={0}
                                fontWeight={400}
                                size="1rem"
                                maxWidth={"85%"}
                                font="PT Sans"
                            />
                            <Space amt={10} />
                        </div>
                        <div className="about-right flex-2">
                            <Heading
                                text="Our "
                                secondaryText="Vision"
                                secondaryTextColor="#0056B8"
                                letterSpacing={0}
                                fontWeight={300}
                                size="2rem"
                                maxWidth={300}
                                font="Montserrat"
                            />
                            <Space amt={10} />
                            <Heading
                                text="We envision a world where every student has the opportunity to excel and achieve their dreams through accessible, innovative, and personalized education. "
                                letterSpacing={0}
                                fontWeight={400}
                                size="1rem"
                                maxWidth={"85%"}
                                font="PT Sans"
                            />
                            <Space amt={10} />
                            <Heading
                                text="We aim to be leaders in education, known for making learning engaging, effective, and student-centered. Our ultimate goal is to help students shape a brighter future for themselves and the world."
                                letterSpacing={0}
                                fontWeight={400}
                                size="1rem"
                                maxWidth={"85%"}
                                font="PT Sans"
                            />
                            <Space amt={10} />
                        </div>
                    </div>
                    {/* <div className="bg-triangle-container rot180">
                        <img src="./bg-triangle.png" />
                    </div> */}
                    <div className="bg-triangle-container down">
                        <img src="./bg-triangle2.png" />
                    </div>
                </motion.div>
            </div>
            {/* <Space amt={60} /> */}
            <div className="bg-about-highlight-2">
                <div className="container-sm">
                    {/* <Space amt={30} /> */}
                    <div className="partnership-container flex justify-center align-center column-on-mobile">
                        <div className="flex-3 m-10">
                            <Space amt={30} />
                            <Heading
                                text="Partnerships and Collaborations"
                                letterSpacing={0}
                                fontWeight={400}
                                size="2rem"
                                maxWidth={"85%"}
                                font="PT Sans"
                            />
                            <Space amt={10} />
                            <Heading
                                text="Edresco collaborates with esteemed educational institutions and organizations to enhance the quality of our offerings and expand opportunities for our users. Eduwave Integrated School is a testament to our commitment to educational partnerships. "
                                letterSpacing={0}
                                fontWeight={400}
                                size="1rem"
                                maxWidth={"750px"}
                                font="PT Sans"
                                // center={true}
                            />
                            <Space amt={30} />
                        </div>
                        {/* <div className="flex-2 m-10"> */}
                        {/* <img src="./partner.png" className="img-fluid" /> */}
                        {/* <Heading
                                text="Our Vision"
                                letterSpacing={0}
                                fontWeight={400}
                                size="2rem"
                                maxWidth={"85%"}
                                font="PT Sans"
                            />
                            <Space amt={10} />
                            <Heading
                                text="Edresco collaborates with esteemed educational institutions and organizations to enhance the quality of our offerings and expand opportunities for our users. "
                                letterSpacing={0}
                                fontWeight={400}
                                size="1rem"
                                maxWidth={"90%"}
                                font="PT Sans"
                                // center={true}
                            /> */}
                        {/* </div> */}
                    </div>
                    {/* <Space amt={30} /> */}
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default AboutPage;
