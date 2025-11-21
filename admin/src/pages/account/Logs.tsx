import GradualSpacing from "@/components/ui/gradual-spacing";
import ReSideBar from "@/components/custom/ReSideBar";
import {ScrollShadow} from "@nextui-org/scroll-shadow";

const Logs = () => {
    return (
        <>
            <ReSideBar pageTitle={"Logs"}>
                <div className={'w-full min-h-screen text-white'}>
                    <div className={'min-h-screen p-4 bg-dashboard-cover bg-cover bg-center'}>
                        <div className={'min-h-screen bg-zinc-950 opacity-95 rounded-2xl p-4'}>
                            <div>
                                <GradualSpacing
                                    className="font-display text-center text-2xl font-bold tracking-tight text-white"
                                    text="Live API Call Logs"
                                />
                            </div>

                            <div className={'px-16'}>
                                <ScrollShadow className={'max-h-[450px] overscroll-none'}>
                                    <p>/api-v1/contributor</p>
                                </ScrollShadow>
                            </div>

                        </div>
                    </div>
                </div>
            </ReSideBar>
        </>
    );
};
export default Logs;
