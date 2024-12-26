import Contributor from "@/pages/auth/Contributor.tsx";
import Login from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import SuspenseFallback from "@/pages/utils/SuspenseFallback";
import {Suspense} from "react";
import {Route, Routes} from "react-router";
import ChooseRole from "@/pages/auth/ChooseRole.tsx";
import Developer from "@/pages/auth/Developer.tsx";

const AuthRoute = () => {
    return (
        <>
            <Suspense fallback={<SuspenseFallback/>}>
                <Routes>
                    <Route path="/auth/signup" element={<ChooseRole/>}/>
                    <Route path="/auth/signup/contributor" element={<Contributor/>}/>
                    <Route path="/auth/signup/developer" element={<Developer/>}/>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default AuthRoute;