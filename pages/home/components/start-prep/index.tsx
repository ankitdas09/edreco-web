import AbsIcon from "../../../../global/components/abs-icon";
import Button from "../../../../global/components/btn";
import Heading from "../../../../global/components/heading";
import Space from "../../../../global/components/space";
import CourseCard from "./components/course-card";

import "./styles/index.scss";

const content = ["Disha", "Parishram", "Fresher", "Achiever", "Target"];
const absIcons = [
    { top: "20px", left: "20px", icon: "./abs-icons/Group 380.png" },
    { top: "120px", left: "240px", icon: "./abs-icons/abs-icon.png" },
    { top: "40px", left: "480px", icon: "./abs-icons/abs-icon2.png" },
    { top: "20px", left: "1260px", icon: "./abs-icons/Group (6).png" },
    { top: "200px", left: "1200px", icon: "./abs-icons/Group (8).png" },
    { top: "360px", left: "1100px", icon: "./abs-icons/Group (10).png" },
    { top: "450px", left: "500px", icon: "./abs-icons/Group (11).png" },
    { top: "540px", left: "200px", icon: "./abs-icons/Group (13).png" },
    { top: "350px", left: "35px", icon: "./abs-icons/Group (7).png" },
];

const StartPrepSection = () => {
    return (
        <div className="start-prep-container container flex">
            {absIcons.map((c) => {
                return <AbsIcon top={c.top} left={c.left} icon={c.icon} />;
            })}
            <div className="start-prep-left">
                <Heading
                    text="Start the Preparations!"
                    size="2rem"
                    fontWeight={600}
                    font="Montserrat"
                    maxWidth={1000}
                />
                <Space amt={24} />
                <Heading
                    text={
                        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
                    }
                    size="1rem"
                    font="PT Sans"
                    fontWeight={400}
                    maxWidth={500}
                />
                <Heading
                    text={"Join us now and start achieving your goals."}
                    size="1rem"
                    font="PT Sans"
                    fontWeight={400}
                    maxWidth={500}
                />
                <Space amt={10} />
                <Heading
                    text={"For more info"}
                    size="1rem"
                    font="PT Sans"
                    fontWeight={400}
                    maxWidth={500}
                />
                <Space amt={24} />
                <Button
                    text="Join Now!"
                    width={170}
                    height={45}
                    fontSize="1rem"
                    type="filled"
                    bgColor="#0056B8"
                    fgColor="#fff"
                    linkTo="courses"
                />
            </div>
            <div className="start-prep-right">
                <div className="flex justify-center align-center column-on-mobile">
                    <div className="course-card-right-triple">
                        <CourseCard
                            text={content[0]}
                            class="For class 9"
                            img="./course-icons/2.png"
                            key={0}
                        />
                        <CourseCard
                            text={content[1]}
                            class="For class 10"
                            img="./course-icons/3.png"
                            key={1}
                        />
                        <CourseCard
                            text={content[2]}
                            class="For class 11"
                            img="./course-icons/8.png"
                            key={2}
                        />
                    </div>
                    <div className="course-card-right-double">
                        <CourseCard
                            text={content[3]}
                            class="For class 12"
                            img="./course-icons/1.png"
                            key={3}
                        />
                        <CourseCard
                            text={content[4]}
                            class="For Droppers"
                            img="./course-icons/6.png"
                            key={4}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPrepSection;
