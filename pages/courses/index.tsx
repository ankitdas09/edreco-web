import NavBar from "../../global/components/navbar";
import "./styles/index.scss";
import Space from "../../global/components/space";

import Footer from "../../global/components/footer";
import CoursesDescSection from "./components/courses-desc";
import ScrollToTop from "../../scrollToTop";
import Head from "next/head";
interface PropTypes {
    width: number;
    height: number;
}

const CoursePage = (props: PropTypes) => {
    return (
        <div className="bg-blue">
            <Head>
                <title>Edresco - Courses</title>
            </Head>
            <ScrollToTop />
            <NavBar variant="white" />
            <Space amt={30} />
            <CoursesDescSection />
            <Footer />
        </div>
    );
};

export default CoursePage;
