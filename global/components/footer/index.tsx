// import { Link } from "react-router-dom";
import Link from "next/link";
import Heading from "../heading";
import Space from "../space";
import "./styles/index.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container flex column-on-mobile">
                <div className="footer-left flex-2 margin-top-mobile">
                    <div className="logo-bgwhite"></div>
                    <Space amt={10} />
                    <Heading
                        text="2nd floor,Arunodoi Path, Srimantapur Guwahati, Kamrup Metro, Assam, 781032 India"
                        fontWeight={400}
                        font="PT Sans"
                        size="1rem"
                        maxWidth={400}
                        color="#fff"
                    />
                    <Space amt={10} />
                    <Heading
                        text="Phone: +91-7670070767"
                        fontWeight={400}
                        font="PT Sans"
                        size="1rem"
                        maxWidth={400}
                        color="#fff"
                    />
                    <Heading
                        text="Email: edresco.official@gmail.com"
                        fontWeight={400}
                        font="PT Sans"
                        size="1rem"
                        maxWidth={400}
                        color="#fff"
                    />
                    <Space amt={10} />
                    <div className="socials flex">
                        <div className="social-icon">
                            <Link
                                href="https://www.facebook.com/profile.php?id=100093530901779"
                                target="_blank"
                            >
                                <img src="socials/facebook.png" alt="" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="social-icon">
                            <Link href="https://www.instagram.com/_edresco_/" target="_blank">
                                <img src="socials/instagram.png" alt="" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="social-icon">
                            <Link href="https://twitter.com/edresco24" target="_blank">
                                <img src="socials/twitter_new.png" alt="" className="img-fluid" />
                            </Link>
                        </div>
                        <div className="social-icon">
                            <Link
                                href="https://www.youtube.com/channel/UCMpk0YyVmtsxwTOUFVxt7Xg"
                                target="_blank"
                            >
                                <img src="socials/youtube.png" alt="" className="img-fluid" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-middle flex column-on-mobile margin-top-mobile">
                    <div className="col">
                        <Heading
                            text="Navigation"
                            fontWeight={400}
                            font="PT Sans"
                            size="1rem"
                            maxWidth={400}
                            color="#fff"
                            // underline={true}
                        />
                        <Space amt={5} />
                        <ul>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link href={"/courses"}>Courses</Link>
                            </li>
                            <li>
                                <Link href={"/scholarship"}>Scholarship</Link>
                            </li>
                            <li>
                                <Link href={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <Heading
                            text="Company"
                            fontWeight={400}
                            font="PT Sans"
                            size="1rem"
                            maxWidth={400}
                            color="#fff"
                            // underline={true}
                        />
                        <Space amt={5} />
                        <ul>
                            <li>
                                <Link href={"/"}>About Us</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>Careeers</Link>
                            </li>
                            <li>
                                <Link href={"/courses"}>Blogs</Link>
                            </li>
                            <li>
                                <Link href={"/scholarship"}>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="footer-right flex-1">hi</div> */}
            </div>
        </footer>
    );
};

export default Footer;
