import "../../../mainStyles.scss";
import "./styles/index.scss";
import Button from "../btn";
// import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface propTypes {
    variant?: "white" | "beige";
}
import { useRouter } from "next/navigation";

const NavBar = (props: propTypes) => {
    const location = usePathname();
    const navigate = useRouter();
    const [navopen, setNavopen] = useState(false);
    return (
        <nav
            style={{
                backgroundColor: props.variant && props.variant === "white" ? "#fff" : "#FDF8EE",
                transition: "background-color 800ms",
            }}
        >
            <div className="nav-flex">
                <div className="nav-left">
                    <div className="logo" onClick={() => navigate.push("/")}></div>
                </div>
                <div className="nav-right">
                    <ul>
                        <li className={location === "/" ? "current-page" : ""}>
                            <a href={"/"}>Home</a>
                        </li>
                        <li className={location === "/about" ? "current-page" : ""}>
                            <a href={"/about"}>About</a>
                        </li>
                        <li className={location === "/courses" ? "current-page" : ""}>
                            <a href={"/courses"}>Courses</a>
                        </li>
                        <li className={location === "/scholarship" ? "current-page" : ""}>
                            <a href={"/scholarship"}>Scholarship</a>
                        </li>
                        <li className={location === "/contact" ? "current-page" : ""}>
                            <a href={"/contact"}>Contact</a>
                        </li>
                        <li>
                            <Button
                                text="Join Now!"
                                width={100}
                                height={30}
                                type="filled"
                                bgColor="#0056B8"
                                fgColor="#fff"
                                linkTo="/register"
                            />
                        </li>
                    </ul>
                </div>
                <div className="nav-right-mobile">
                    <div
                        className="hamburger-icon"
                        onClick={() => {
                            setNavopen(!navopen);
                        }}
                    ></div>
                </div>
            </div>
            {navopen && (
                <ul className="mobile-nav-tray">
                    <li className={location === "/" ? "current-page" : ""}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className={location === "/about" ? "current-page" : ""}>
                        <Link href={"/about"}>About</Link>
                    </li>
                    <li className={location === "/courses" ? "current-page" : ""}>
                        <Link href={"/courses"}>Courses</Link>
                    </li>
                    <li className={location === "/scholarship" ? "current-page" : ""}>
                        <Link href={"/scholarship"}>Scholarship</Link>
                    </li>
                    <li className={location === "/contact" ? "current-page" : ""}>
                        <Link href={"/contact"}>Contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
