import "./styles/index.scss";
interface PropTypes {
    amt: number;
}
const Space = (props: PropTypes) => {
    return <div className="space" style={{ margin: props.amt }}></div>;
};

export default Space;
