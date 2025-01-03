import GradualSpacing from "@/components/ui/gradual-spacing";
import ReSideBar from "@/components/custom/ReSideBar";

const APIKey = () => {
    return (
        <>
            <ReSideBar pageTitle={"Access"}>
                <div className={'w-full min-h-screen text-white'}>
                    <div className={'min-h-screen p-4 bg-dashboard-cover bg-cover bg-center'}>
                        <div
                            className={'min-h-screen bg-zinc-950 opacity-95 rounded-2xl p-4 flex flex-col justify-center items-center'}>
                            <GradualSpacing
                                className="font-display text-center text-2xl font-bold tracking-tight text-white"
                                text="API Key and Secret Key"
                            />
                            <p className={'text-white text-sm tracking-widest w-96 text-center'}>
                                These credentials authenticate and authorize API access. If compromised, generate
                                new ones to prevent unauthorized access and security risks.
                            </p>
                        </div>
                    </div>
                </div>
            </ReSideBar>
        </>
    )
};

export default APIKey;
