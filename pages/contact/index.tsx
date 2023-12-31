import "../../mainStyles.scss";
import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";
import Footer from "../../global/components/footer";
import ScrollToTop from "../../scrollToTop";
import Heading from "../../global/components/heading";

import Button from "../../global/components/btn";
import { useRouter } from "next/router";
import { FormEvent, useRef, useState } from "react";
import { databases, databaseId, contactFormCollectionId, ID } from "@/lib/appwrite";
import Head from "next/head";

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
    const router = useRouter();
    const [err, setErr] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");
    const [query, setQuery] = useState("");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    function handleSubmit(e) {
        e.preventDefault();
        setErr("");
        setBtnDisabled(true);
        if (query.length > 300 || query.length === 0) {
            setErr("Query must be less than 300 characters");
            setBtnDisabled(false);

            return;
        }
        if (phoneNumber.length !== 10) {
            setErr("Invalid phone number");
            setBtnDisabled(false);

            return;
        }
        if (name.length <= 2) {
            setErr("Invalid name");
            setBtnDisabled(false);

            return;
        }
        const body = { phoneNumber, name, query };
        const promise = databases.createDocument(
            databaseId,
            contactFormCollectionId,
            ID.unique(),
            body
        );
        promise.then(
            function () {
                // console.log(response);
                setErr("");
                setBtnDisabled(false);
                setPhoneNumber("");
                setName("");
                setQuery("");
                alert("Successfully submitted! We will get back to you shortly");
            },
            function (error) {
                // alert(error);
                // console.log(error);
                setErr("Something went wrong! Please try again.");
                setBtnDisabled(false);
            }
        );
    }
    return (
        <section className="">
            <Head>
                <title>Edresco - Courses</title>
            </Head>
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
                        <p style={{ color: "red" }}>{err}</p>
                        <form onSubmit={handleSubmit} id="contact-form">
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="input-main"
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Name"
                                className="input-main"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <textarea
                                placeholder="Enter query"
                                className="input-main"
                                rows={5}
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            />
                            <Space amt={20} />
                            {!btnDisabled && (
                                <Button
                                    text="Submit"
                                    width={90}
                                    height={30}
                                    type="filled"
                                    bgColor="#0056B8"
                                    fgColor="#fff"
                                />
                            )}
                        </form>
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
                    <div className="flex-1 m-10 branches-left">
                        <div className="branch-img">
                            <img
                                src="contact/hajo_map.png"
                                alt=""
                                onClick={() => {
                                    window.open(
                                        "https://www.google.com/maps/place/26%C2%B015'03.3%22N+91%C2%B031'57.4%22E/@26.2512873,91.5299465,16.99z/data=!4m4!3m3!8m2!3d26.250921!4d91.532603?entry=ttu"
                                    );
                                }}
                            />
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
                    <div className="flex-1 m-10 branches-right">
                        <div className="branch-img">
                            <img
                                src="contact/mukalmua_map.png"
                                alt=""
                                onClick={() => {
                                    window.open(
                                        "https://www.google.com/maps/place/26%C2%B016'24.6%22N+91%C2%B021'03.2%22E/@26.273514,91.3495639,18.01z/data=!4m4!3m3!8m2!3d26.273506!4d91.35089?entry=ttu"
                                    );
                                }}
                            />
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
