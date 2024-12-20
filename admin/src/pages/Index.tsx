"use client";

import {cn} from "@/lib/utils";
import {DotPattern} from "@/components/ui/dot-pattern";
import {ArrowRightIcon} from "@radix-ui/react-icons";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import ShineBorder from "@/components/ui/shine-border";
import Header from "@/components/custom/Header";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

const Index = () => {
    return (
        <>
            <div className={'w-full min-h-screen bg-black'}>

                <div className={'w-full flex flex-col justify-center items-center'}>
                    <Header/>
                </div>

                <div className={'flex flex-col items-center justify-center mt-10'}>
                    <h1 className="text-5xl font-extrabold tracking-widest !leading-[0] text-white">
                        NIFODA
                    </h1>
                    <div
                        className={cn(
                            "mb-8 group rounded-full border border-black/5 bg-neutral-800 text-base transition-all ease-in hover:cursor-pointer hover:bg-green-800",
                        )}
                    >
                        <AnimatedShinyText
                            className="text-sm inline-flex items-center justify-center text-neutral-400 px-2 transition ease-out hover:text-neutral-100 hover:duration-300">
                            <span>✨ Introducing Nigeria Food Database/API </span>
                            <ArrowRightIcon
                                className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"/>
                        </AnimatedShinyText>
                    </div>
                    <div className={'flex flex-col items-center justify-center mb-16'}>
                        <ShineBorder
                            className="text-sm bg-black text-neutral-300 leading-loose w-2/4 px-4 py-12 text-center"
                            color={'#166534'}
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
                            <div className={'flex flex-row gap-8'}>
                                <div className={'flex flex-row gap-8 mt-4'}>
                                    <Button color="primary" className={'bg-green-800 text-white'}>
                                        <Link className={'text-white'} href="#" >
                                            Start Here
                                        </Link>
                                    </Button>
                                    <Button color="primary" className={'bg-green-800 text-white'}>
                                        <Link className={'text-white'} href="#" isExternal showAnchorIcon >
                                            Try the API
                                        </Link>
                                    </Button>
                                    {/*<InteractiveHoverButton text={'Start Here'} className={'text-text-white bg-green-700 hover:bg-black'}/>*/}
                                </div>
                            </div>
                        </ShineBorder>
                    </div>
                    <DotPattern
                        className={cn(
                            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                        )}
                    />
                </div>
            </div>
        </>
    );
};
export default Index;
