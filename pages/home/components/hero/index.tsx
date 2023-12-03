import Space from "../../../../global/components/space";
import Button from "../../../../global/components/btn";
import "./styles/index.scss";
import AbsIcon from "../../../../global/components/abs-icon";

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

const HeroSection = () => {
    return (
        <div
            style={{
                paddingTop: "15px",
                backgroundColor: "#FDF8EE",
                paddingBottom: "190px",
            }}
        >
            <div className="container hero flex align-center justify-space">
                {absIcons.map((c) => {
                    return <AbsIcon top={c.top} left={c.left} icon={c.icon} />;
                })}
                <div className="hero-left">
                    <div className="hero-left-anim">
                        <img src="hat-svg.svg" alt="animated image" />
                    </div>
                    <p className="hero-text">Learning Today, Leading Tomorrow</p>
                    <Space amt={10} />
                    <p className="hero-subtext">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos minus eligendi
                        nemo velit nostrum nisi culpa, magnam rerum.
                    </p>
                    <Space amt={20} />
                    <Button
                        text="Join Now!"
                        width={170}
                        height={45}
                        type="filled"
                        bgColor="#0056B8"
                        fgColor="#fff"
                        linkTo="courses"
                        fontSize="1.0rem"
                    />
                </div>
                <div className="hero-right">
                    <img src="hero-right.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
