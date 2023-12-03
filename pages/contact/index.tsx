import "../../mainStyles.scss";
import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import Footer from "../../global/components/footer";
import ScrollToTop from "../../scrollToTop";
import Heading from "../../global/components/heading";

import Button from "../../global/components/btn";

interface PropTypes {
    width: number;
    height: number;
}

const contactDetails = [
    { heading: "Call (8:00AM to 8:00PM)", text: "+91-7670070767", icon: "call.png" },
    { heading: "Email Us", text: "edresco.official@gmail.com", icon: "email.png" },
    {
        heading: "Address",
        text: "2nd floor,Arunodoi Path, SrimantapurGuwahati, Assam, 781032India",
        icon: "location.png",
    },
];

const ContactPage = (props: PropTypes) => {
    console.log(props);

    return (
        <section className="">
            <ScrollToTop />
            <NavBar variant="white" />
            <div className="container-sm">
                <Space amt={20} />
                <div className="contact-main-container flex justify-center align-center">
                    <div className="contact-left">
                        <Heading
                            text="Reach out to us."
                            font="Montserrat"
                            fontWeight={700}
                            size="1.5rem"
                            maxWidth={"100%"}
                        />
                        <Space amt={12} />
                        <Heading
                            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
                            font="Montserrat"
                            fontWeight={400}
                            size="0.9rem"
                            maxWidth={450}
                        />
                        <Space amt={30} />
                        <input type="number" placeholder="Phone Number" className="input-main" />
                        <input type="text" placeholder="Name" className="input-main" />
                        <textarea placeholder="Enter query" className="input-main" rows={5} />
                        <Space amt={20} />
                        <Button
                            text="Submit"
                            width={90}
                            height={30}
                            type="filled"
                            bgColor="#0056B8"
                            fgColor="#fff"
                        />
                    </div>
                    <div className="contact-right">
                        <div className="contact-map-img"></div>
                    </div>
                </div>
                <Space amt={60} />
                <div className="contact-info-container bg-white drop-shadow rounded-rectangle">
                    <Heading
                        text="Contact Us"
                        font="Montserrat"
                        fontWeight={700}
                        size="1.2rem"
                        maxWidth={"100%"}
                        center={true}
                    />
                    <Space amt={30} />
                    <div className="contact-details-container flex justify-around column-on-mobile align-start">
                        {contactDetails.map((c) => (
                            <div className="contact-details-main flex flex-column row-on-mobile justify-center align-center">
                                <div className="contact-icon-container bg-blue rounded-rectangle">
                                    <img src={c.icon} alt="" className="contact-icon" />
                                </div>
                                <div className="contact-details-text-container flex flex-column align-start-mobile">
                                    <Heading
                                        text={c.heading}
                                        font="PT Sans"
                                        fontWeight={600}
                                        size="0.8rem"
                                        maxWidth={"100%"}
                                        center={true}
                                    />
                                    {props.width <= 600 ? (
                                        <Heading
                                            text={c.text}
                                            font="PT Sans"
                                            fontWeight={400}
                                            size="0.8rem"
                                            maxWidth={200}
                                            center={false}
                                        />
                                    ) : (
                                        <Heading
                                            text={c.text}
                                            font="PT Sans"
                                            fontWeight={400}
                                            size="0.8rem"
                                            maxWidth={200}
                                            center={true}
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Space amt={60} />
                <Heading
                    text="Our Branches"
                    font="Montserrat"
                    fontWeight={700}
                    size="1.2rem"
                    maxWidth={"100%"}
                    center={true}
                />
                <Space amt={30} />
                <div className="branches-container flex column-on-mobile">
                    <div className="flex-1 m-10">
                        <div className="branch-img">
                            <img src="map.webp" alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="branch-details">
                            <Space amt={10} />
                            <Heading
                                text="Hajo Branch"
                                font="PT Sans"
                                fontWeight={600}
                                size="1.05rem"
                                maxWidth={"80%"}
                            />
                            <Heading
                                text="Hajo-Barpeta Road, Near Axis Bank, Hajo, Kamrup, 781102"
                                fontWeight={400}
                                font="PT Sans"
                                size="1rem"
                                maxWidth={"80%"}
                            />
                            <Space amt={10} />
                            <Heading
                                text="Phone: +91-7670070767"
                                fontWeight={400}
                                font="PT Sans"
                                size="1rem"
                                maxWidth={"80%"}
                            />
                        </div>
                    </div>
                    <div className="flex-1 m-10">
                        <div className="branch-img">
                            <img src="map.webp" alt="" style={{ width: "100%" }} />
                        </div>
                        <div className="branch-details">
                            <Space amt={10} />
                            <Heading
                                text="Mukalmua Branch"
                                font="PT Sans"
                                fontWeight={600}
                                size="1.05rem"
                                maxWidth={"80%"}
                            />
                            <Heading
                                text="Vidyapur Path, Near Barkhetri College, Mukalmua, Nalbari, 781126"
                                fontWeight={400}
                                font="PT Sans"
                                size="1rem"
                                maxWidth={"80%"}
                            />
                            <Space amt={10} />
                            <Heading
                                text="Phone: +91-7670070767"
                                fontWeight={400}
                                font="PT Sans"
                                size="1rem"
                                maxWidth={"80%"}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Space amt={45} />
            <Footer />
        </section>
    );
};

export default ContactPage;
