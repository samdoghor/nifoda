import {Route, Routes} from "react-router";
import {lazy, Suspense} from "react";
import SuspenseFallback from "@/pages/utils/SuspenseFallback.tsx";

const Index = lazy(() => import("@/pages/Index"));
const ReportIssue = lazy(() => import("@/pages/static/ReportIssue.tsx"));
const MakeSuggestion = lazy(() => import("@/pages/static/MakeSuggestion.tsx"));

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
