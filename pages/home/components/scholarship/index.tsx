// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import "./styles/index.scss";
const ScholarshipSection = () => {
    const navigate = useRouter();
    return (
        <div
            className="scholarship-section container"
            onClick={() => {
                navigate.push("/scholarship");
            }}
        >
            <div className="scholarship-cover container p0"></div>
        </div>
    );
};

export default ScholarshipSection;
