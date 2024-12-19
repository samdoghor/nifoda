"use client";

import {cn} from "@/lib/utils";
import {DotPattern} from "@/components/ui/dot-pattern";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import ShineBorder from "@/components/ui/shine-border";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import Header from "@/components/custom/Header";

const Index = () => {
    return (
        <>
            <div className={'w-full min-h-screen bg-black'}>

                <div className={'flex flex-col justify-center items-center'}>
                    <Header/>
                </div>

                <div className={'flex flex-col items-center justify-center mt-10'}>
                    <div
                        className={cn(
                            "group rounded-full border border-black/5 bg-transparent text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-800",
                        )}
                    >
                        <AnimatedShinyText
                            className="text-sm inline-flex items-center justify-center text-neutral-400 px-2 transition ease-out hover:text-neutral-100 hover:duration-300">
                            <span>✨ Introducing Nigeria Food Database/API </span>
                            <ArrowRightIcon
                                className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
                        </AnimatedShinyText>
                    </div>
                    <h1 className="scroll-m-20 text-3xl font-extrabold tracking-widest lg:text-5xl text-white">
                        NIFODA
                    </h1>
                    {/*<p className={'text-green-400 font-semibold tracking-widest lg:text-normal'}>*/}
                    {/*    ..your comprehensive Nigeria food database/API*/}
                    {/*</p>*/}
                    <div className={'flex flex-col items-center justify-center mb-16'}>
                        <ShineBorder
                            className="text-sm bg-black text-neutral-300 leading-loose w-2/4 p-12 text-justify"
                            color={'#404040'}
                        >
                            <div>
                                <p>
                                    Welcome to NIFODA, Nigeria's premier food database API designed to provide seamless
                                    access
                                    to
                                    comprehensive food data. Developers can generate API keys to integrate this rich
                                    resource
                                    into
                                    their applications, enabling innovative solutions in nutrition, health, and
                                    food-related
                                    services. Contributors play a vital role by submitting accurate food information,
                                    helping to
                                    build and maintain a reliable database that serves the nation.
                                </p>
                                <p>
                                    Join us in revolutionizing food data accessibility in Nigeria!
                                </p>
                            </div>

                            <div className={'flex flex-row gap-8 mt-10'}>
                                <InteractiveHoverButton text={'Contribute'} className={'text-black hover:bg-black'}/>
                                {/*<InteractiveHoverButton text={'Test the API'} className={'hover:bg-black'}/>*/}
                                <InteractiveHoverButton text={'Get API Key'} className={'text-black hover:bg-black'}/>
                            </div>

                        </ShineBorder>
                    </div>
                    <div className={'flex flex-row gap-8'}>
                        {/*    <InteractiveHoverButton text={'Contribute'} className={'hover:bg-black'}/>*/}
                        <InteractiveHoverButton text={'Test the API'} className={'hover:bg-black'}/>
                        {/*    <InteractiveHoverButton text={'Get API Key'} className={'hover:bg-black'}/>*/}
                    </div>

                    <DotPattern
                        className={cn(
                            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                        )}
                    />
                </div>
            </div>
        </>
    );
};
export default Index;
