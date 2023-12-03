import "./styles/index.scss";
const DropDownMenu = () => {
    return (
        <div className="dropdown">
            <button className="dropbtn input-main">Dropdown</button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    );
};

export default DropDownMenu;
