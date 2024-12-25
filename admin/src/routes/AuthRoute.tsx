import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import SuspenseFallback from "@/pages/utils/SuspenseFallback";
import { Suspense } from "react";
import {Route, Routes} from "react-router";

const AuthRoute = () => {
    return (
        <>
            <Suspense fallback={<SuspenseFallback/>}>
                <Routes>
                    <Route path="/auth/signup" element={<Register/>}/>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default AuthRoute;