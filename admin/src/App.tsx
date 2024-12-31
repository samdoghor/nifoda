import MainRoute from "@/routes/MainRoute";
import {Toaster} from "@/components/ui/toaster";
import Footer from "@/components/custom/Footer";
import Header from "@/components/custom/Header.tsx";
import {useEffect, useState} from "react";
import {DecryptionUtil} from "@/pages/utils/CipherUtil.ts";
import Cookies from "js-cookie";

const userLoggedIn = localStorage.getItem("_nfdldi");
const decryptedLoggedIn = userLoggedIn ? DecryptionUtil(userLoggedIn) : null;
const userLoggedInC = Cookies.get("_nfdldi");
const decryptedLoggedInC = userLoggedInC ? DecryptionUtil(userLoggedInC) : null;

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (decryptedLoggedIn !== `${import.meta.env.VITE_LOGGED_IN}` &&
            decryptedLoggedInC !== `${import.meta.env.VITE_LOGGED_IN}`) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true);
        }
    }, [])

    return (
        <>
            {!isLoggedIn ? (
                <>
                    <div className={'w-full flex flex-col justify-center items-center'}>
                        <Header />
                    </div>
                    <MainRoute />
                    <div className={'w-full flex flex-col justify-center items-center bg-black'}>
                        <Footer />
                    </div>
                </>
            ) : (
                <MainRoute />
            )}
            <Toaster />
        </>
    )
}

export default App
