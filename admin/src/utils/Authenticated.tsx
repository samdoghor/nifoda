// import {useEffect} from "react";
// import Cookies from "js-cookie";
// import {useNavigate} from "react-router";
//
// const Authenticated = () => {
//
//     const navigate = useNavigate()
//
//     useEffect(() => {
//         const confirm_user = Cookies.get("_nfdt")
//
//         if (confirm_user === null) {
//             navigate("/login");
//         }
//     })
//
//     return (
//         <>
//         </>
//     );
// };
// export default Authenticated;

import React, {useEffect} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router";

const Authenticated = ({children}: { children: React.ReactNode }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const confirm_user = Cookies.get("_nfdt");

        if (confirm_user === null) {
            navigate("/login");
        }
    });

    return children;
};

export default Authenticated;