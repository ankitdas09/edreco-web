import NavBar from "@/global/components/navbar";
import "../../../mainStyles.scss";
import React, { useEffect } from "react";
import Footer from "@/global/components/footer";
import { useRouter } from "next/router";
import Head from "next/head";
const Achiever = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace("/courses");
    }, []);
    return (
        <>
            <Head>
                <title>Edresco - Achiever</title>
            </Head>
            <NavBar variant="white" />

            <Footer />
        </>
    );
};

export default Achiever;
