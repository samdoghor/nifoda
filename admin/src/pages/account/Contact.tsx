import GradualSpacing from "@/components/ui/gradual-spacing";
import ReSideBar from "@/components/custom/ReSideBar";

const Contact = () => {
    return (
        <>
            <ReSideBar pageTitle={"Contact"}>
                <div className={'w-full min-h-screen text-white'}>
                    <div className={'min-h-screen p-4 bg-dashboard-cover bg-cover bg-center'}>
                        <div
                            className={'min-h-screen bg-zinc-950 opacity-95 rounded-2xl p-4'}>
                            <GradualSpacing
                                className="font-display text-center text-2xl font-bold tracking-tight text-white"
                                text="Contact"
                            />
                        </div>
                    </div>
                </div>
            </ReSideBar>
        </>
    );
};
export default Contact;
