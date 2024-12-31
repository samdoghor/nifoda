import {AppSidebar} from "@/components/app-sidebar"
import {Separator} from "@/components/ui/separator"
import {SidebarInset, SidebarProvider, SidebarTrigger,} from "@/components/ui/sidebar"
import React, {ReactNode} from "react";
import NifodaLogo from "@/components/custom/NifodaLogo.tsx";
import {Chip} from "@nextui-org/chip";
import {FaCircleCheck} from "react-icons/fa6";
import Footer from "@/components/custom/Footer.tsx";

interface ReSideBarProps {
    children: ReactNode
    pageTitle: string
}

const ReSideBar: React.FC<ReSideBarProps> = ({children, pageTitle}) => {
    return (
        <>
            <SidebarProvider>
                <AppSidebar/>
                <SidebarInset>
                    <header
                        className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-black p-2 sticky">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1 text-white"/>
                            <Separator orientation="vertical" className="mr-2 h-4"/>
                            <div className={'flex flex-row gap-4 mb-2'}>
                                <div className={'flex flex-row gap-2 items-center'}>
                                    <div>
                                        <NifodaLogo width={30} height={30} fill={'white'}/>
                                    </div>
                                    <p className={'text-white font-semibold tracking-widest'}> NIFODA </p>
                                </div>
                                <Chip radius="sm" variant="flat" startContent={<FaCircleCheck/>}
                                      className={'text-white bg-green-800'}>{pageTitle}</Chip>
                            </div>
                        </div>
                    </header>
                    {children}
                    <div className={'w-full flex flex-col justify-center items-center bg-black'}>
                        <Footer/>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
);
};
export default ReSideBar;
