import {Route, Routes} from "react-router";
import {lazy, Suspense} from "react";
import SuspenseFallback from "@/pages/SuspenseFallback";

const Index = lazy(() => import("@/pages/Index"));
const ReportIssue = lazy(() => import("@/pages/ReportIssue"));
const MakeSuggestion = lazy(() => import("@/pages/MakeSuggestion"));

const MainRoute = () => {
    return (
        <>
            <Suspense fallback={<SuspenseFallback/>}>
                <Routes>
                    <Route path="/" element={<Index/>}/>
                    <Route path="/report-issues" element={<ReportIssue/>}/>
                    <Route path="/make-suggestions" element={<MakeSuggestion/>}/>
                </Routes>
            </Suspense>
        </>
    );
};
export default MainRoute;
