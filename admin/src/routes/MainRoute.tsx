import {Route, Routes} from "react-router";
import {lazy, Suspense} from "react";
import SuspenseFallback from "@/pages/utils/SuspenseFallback.tsx";

const Index = lazy(() => import("@/pages/Index"));
const ReportIssue = lazy(() => import("@/pages/static/ReportIssue"));
const MakeSuggestion = lazy(() => import("@/pages/static/MakeSuggestion"));

// Auth Routes
const ChooseRole = lazy(() => import("@/pages/auth/ChooseRole"));
const Contributor = lazy(() => import("@/pages/auth/Contributor.tsx"));
const Developer = lazy(() => import("@/pages/auth/Developer.tsx"));
const Login = lazy(() => import("@/pages/auth/Login.tsx"));
const ForgotPassword = lazy(() => import("@/pages/auth/ForgotPassword.tsx"));

// Dashboard Routes
const Dashboard = lazy(() => import("@/pages/account/Dashboard"));

const MainRoute = () => {
    return (
        <>
            <Suspense fallback={<SuspenseFallback/>}>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/report-issues" element={<ReportIssue/>}/>
                    <Route path="/make-suggestions" element={<MakeSuggestion/>}/>

                    {/*Auth Routes*/}
                    <Route path="/auth/signup" element={<ChooseRole/>}/>
                    <Route path="/auth/signup/contributor" element={<Contributor/>}/>
                    <Route path="/auth/signup/developer" element={<Developer/>}/>
                    <Route path="/auth/login" element={<Login/>}/>
                    <Route path="/auth/forgot-password" element={<ForgotPassword/>}/>

                    {/*Dashboard Routes*/}
                    <Route path="/account/dashboard" element={<Dashboard/>}/>
                </Routes>
            </Suspense>
        </>
    );
};
export default MainRoute;
