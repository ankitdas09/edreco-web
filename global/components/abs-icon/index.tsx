import "./styles/styles.scss";
const AbsIcon = (props: { top: string; left: string; icon: string }) => {
    return (
        <div
            className="abs-icon"
            style={{
                top: props.top,
                left: props.left,
            }}
        >
            <img src={props.icon} alt="" className="img-fluid" />
        </div>
    );
};

export default AbsIcon;
