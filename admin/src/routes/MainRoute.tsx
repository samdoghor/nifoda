import { Route, Routes, useLocation, useNavigate } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import SuspenseFallback from "@/pages/utils/SuspenseFallback";
import { DecryptionUtil } from "@/pages/utils/CipherUtil";
import Cookies from "js-cookie";

// Static Routes
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
const LeaderBoard = lazy(() => import("@/pages/account/LeaderBoard"));
const FoodItem = lazy(() => import("@/pages/account/FoodItem"));
const SubmissionStatus = lazy(() => import("@/pages/account/SubmissionStatus"));
const Logs = lazy(() => import("@/pages/account/Logs"));
const APIKey = lazy(() => import("@/pages/account/APIKey"));
const Contact = lazy(() => import("@/pages/account/Contact"));

const userLoggedIn = localStorage.getItem("_nfdldi");
const decryptedLoggedIn = userLoggedIn ? DecryptionUtil(userLoggedIn) : null;
const userLoggedInC = Cookies.get("_nfdldi");
const decryptedLoggedInC = userLoggedInC ? DecryptionUtil(userLoggedInC) : null;

const MainRoute = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (decryptedLoggedIn === `${import.meta.env.VITE_LOGGED_IN}` &&
            decryptedLoggedInC === `${import.meta.env.VITE_LOGGED_IN}`) {
            if (!location.pathname.startsWith("/account")) {
                navigate("/account/dashboard");
            }
        } else {
            if (location.pathname.startsWith("/account")) {
                navigate("/auth/login");
            }
        }
    }, [navigate, location]);

    return (
        <>
            <Suspense fallback={<SuspenseFallback />}>
                <Routes>
                    {decryptedLoggedIn === `${import.meta.env.VITE_LOGGED_IN}` &&
                    decryptedLoggedInC === `${import.meta.env.VITE_LOGGED_IN}` ? (
                        <>
                            {/*Dashboard Routes*/}
                            <Route path="/account/dashboard" element={<Dashboard />} />
                            <Route path="/account/leaderboard" element={<LeaderBoard />} />
                            <Route path="/account/fooditem" element={<FoodItem />} />
                            <Route path="/account/submission" element={<SubmissionStatus />} />
                            <Route path="/account/logs" element={<Logs />} />
                            <Route path="/account/access" element={<APIKey />} />
                            <Route path="/account/contact" element={<Contact />} />
                        </>
                    ) : (
                        <>
                            {/*Static Routes*/}
                            <Route path="/" element={<Index />} />
                            <Route path="/report-issues" element={<ReportIssue />} />
                            <Route path="/make-suggestions" element={<MakeSuggestion />} />

                            {/*Auth Routes*/}
                            <Route path="/auth/signup" element={<ChooseRole />} />
                            <Route path="/auth/signup/contributor" element={<Contributor />} />
                            <Route path="/auth/signup/developer" element={<Developer />} />
                            <Route path="/auth/login" element={<Login />} />
                            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                        </>
                    )}
                </Routes>
            </Suspense>
        </>
    );
};
export default MainRoute;