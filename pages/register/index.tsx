import "../../mainStyles.scss";
import "./styles/index.scss";
import { useState } from "react";
import Button from "../../global/components/btn";
import Heading from "../../global/components/heading";
import Space from "../../global/components/space";

import { ID, collectionId, databaseId, databases } from "../../lib/appwrite";
import Head from "next/head";

const RegisterPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    // console.log(databaseId);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    function submitForm(e) {
        setErrMsg("");
        setBtnDisabled(true);
        e.preventDefault();
        console.log(e);
        const phoneNumber: string = e.target[0].value;
        const email = e.target[1].value;
        const name = e.target[2].value;
        const board = e.target[3].value;
        const center = e.target[4].value;
        const currentCourse = e.target[5].value;
        const preparation = e.target[6].value;

        if (phoneNumber.length !== 10) {
            // alert("Invalid Phone number");
            setErrMsg("Invalid Phone Number");
            setBtnDisabled(false);
            return;
        }

        const promise = databases.createDocument(databaseId, collectionId, ID.unique(), {
            phoneNumber,
            email,
            name,
            currentCourse,
            board,
            center,
            preparation,
        });

        promise.then(
            function () {
                // console.log(response);
                setErrMsg("");
                setSubmitted(true);
                setBtnDisabled(false);
            },
            function (error) {
                alert(error);
                console.log(error);
                setErrMsg("Something went wrong! Please try again.");
                setBtnDisabled(false);
            }
        );
    }
    return (
        <section className="bg-register flex justify-center align-center">
            <Head>
                <title>Edresco - Register</title>
            </Head>
            <div className="main-register-container rounded-rectangle drop-shadow flex flex-column justify-center align-center">
                <div className="back-btn-container flex w-100 ">
                    <div
                        className="back-img"
                        style={{
                            width: "36px",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            window.history.back();
                        }}
                    >
                        <img src="back-icon.png" style={{ width: "100%" }} />
                    </div>
                </div>

                {!submitted ? (
                    <>
                        <Space amt={10} />
                        <Heading
                            text="Join us "
                            secondaryText="now!"
                            size="1.8rem"
                            fontWeight={600}
                            maxWidth={"100%"}
                            font="Montserrat"
                            center={true}
                            secondaryTextColor="#0056B8"
                        />
                        <Heading
                            text="We will get back to you shortly!"
                            size="1rem"
                            fontWeight={400}
                            maxWidth={"100%"}
                            font="PT Sans"
                            center={true}
                        />
                        <Space amt={10} />
                        <p style={{ color: "red", fontSize: "0.9rem" }}>{errMsg}</p>
                        <form
                            className="flex flex-column justify-center align-center"
                            onSubmit={submitForm}
                        >
                            <input
                                type="number"
                                placeholder="Phone number"
                                name="number"
                                id=""
                                required
                                className="input-main"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                id=""
                                // required
                                className="input-main"
                            />
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                id=""
                                required
                                className="input-main"
                            />
                            <select name="board" id="board" className="input-main" required>
                                <option value="" disabled selected>
                                    Board
                                </option>
                                <option value="cbse">CBSE</option>
                                <option value="seba">SEBA</option>
                                <option value="ahsec">AHSEC</option>
                                <option value="icse">ICSE</option>
                                <option value="others">Others</option>
                            </select>
                            <select name="center" id="center" className="input-main" required>
                                <option value="" disabled selected>
                                    Center
                                </option>
                                <option value="hajo">Hajo</option>
                                <option value="mukulmua">Mukulmua</option>
                            </select>
                            <select
                                name="currentCourse"
                                id="currentCourse"
                                className="input-main"
                                required
                            >
                                <option value="" disabled selected>
                                    Class
                                </option>
                                <option value="9">Class 9</option>
                                <option value="10">Class 10</option>
                                <option value="11">Class 11</option>
                                <option value="12">Class 12</option>
                                <option value="dropper">Dropper</option>
                            </select>
                            <select
                                name="preparation"
                                id="preparation"
                                className="input-main"
                                required
                            >
                                <option value="" disabled selected>
                                    Preparation
                                </option>
                                <option value="board">Board</option>
                                <option value="medical">Medical</option>
                                <option value="engineering">Engineering</option>
                            </select>
                            <Space amt={10} />
                            {!btnDisabled && (
                                <Button
                                    text="Join Now!"
                                    bgColor="#0056B8"
                                    fgColor="#fff"
                                    width={140}
                                    height={36}
                                    type="filled"
                                    disabled={btnDisabled}
                                />
                            )}
                            <Space amt={10} />
                            <Heading
                                text="We do not share your information with any third party."
                                size="0.6rem"
                                fontWeight={400}
                                maxWidth={"100%"}
                                font="PT Sans"
                                center={true}
                            />
                        </form>
                        <Space amt={10} />
                        <div className="logo-right-container">
                            <img src="logo-bgwhite.png" alt="" />
                        </div>
                    </>
                ) : (
                    <>
                        <Heading
                            text="Thank "
                            secondaryText="you!"
                            size="1.8rem"
                            fontWeight={600}
                            maxWidth={"100%"}
                            font="Montserrat"
                            center={true}
                            secondaryTextColor="#0056B8"
                            color="#639D4A"
                        />
                        <Heading
                            text="Our team will contact you with further details shortly."
                            size="1rem"
                            fontWeight={400}
                            maxWidth={300}
                            font="PT Sans"
                            center={true}
                        />
                        <Space amt={10} />
                        <Button
                            text="Return to home page"
                            bgColor="#0056B8"
                            fgColor="#fff"
                            width={220}
                            height={36}
                            type="filled"
                            linkTo="/"
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default RegisterPage;
