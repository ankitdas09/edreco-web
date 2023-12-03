import React, { useEffect, useState } from "react";
import HomePage from "./home";

const Hi = () => {
    const [screenSize, setScreenSize] = useState({
        width: 1200,
        height: 1200,
    });

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, [screenSize]);
    return <HomePage width={screenSize.width} height={screenSize.height} />;
};

export default Hi;
