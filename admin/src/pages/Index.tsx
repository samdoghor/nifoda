"use client";

import {cn} from "@/lib/utils";
import {DotPattern} from "@/components/ui/dot-pattern";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import Header from "@/components/custom/Header";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import NifodaLogo from "@/components/custom/NifodaLogo";
import Footer from "@/components/custom/Footer";


const Index = () => {
    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>
            <div className={'w-full bg-black h-min py-14'}>
                <div className={'flex flex-col items-center justify-center'}>
                    <NifodaLogo width={150} height={150} fill={"#4ade80"}/>
                    <h1 className="text-5xl font-extrabold tracking-widest !leading-[0] text-white my-8">
                        NIFODA
                    </h1>
                    <h2 className="text-xl font-extrabold tracking-widest !leading-[0] text-green-200 mt-4 mb-8">
                        Nigeria Food Database/API
                    </h2>
                    <div
                        className={cn(
                            "mb-8 mt-4 group rounded-full border border-black/5 bg-neutral-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-green-800",
                        )}
                    >
                        <AnimatedShinyText
                            className="text-sm inline-flex items-center justify-center text-neutral-400 px-2 transition ease-out hover:text-neutral-100 hover:duration-300">
                            <span>✨ Empowering Nigeria with Food Data </span>
                            <ArrowRightIcon
                                className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
                        </AnimatedShinyText>
                    </div>

                    <div className={'flex flex-row gap-8 mb-8'}>
                        <div className={'flex flex-row gap-8'}>
                            <Button color="primary" className={'bg-green-800 text-white'}>
                                <Link className={'text-white'} href={import.meta.env.VITE_FRONTEND_APPLICATION_URL}
                                      isExternal showAnchorIcon>
                                    Try the API
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>

            <div className={'w-full flex flex-col justify-center items-center bg-black'}>
                <Footer/>
            </div>
        </>
    )

};
export default Index;
