import * as React from "react"
import {NavUser} from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import NifodaLogo from "@/components/custom/NifodaLogo";
import {MdDashboard} from "react-icons/md";
import {GiPodiumWinner} from "react-icons/gi";
import {PiBowlFoodFill} from "react-icons/pi";
import {FaEnvelope, FaQuestionCircle} from "react-icons/fa";
import {SiBookstack} from "react-icons/si";
import {IoLogoBuffer} from "react-icons/io";
import { Link } from "react-router";

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
}

const items = [
    {
        title: "Dashboard",
        url: "/account/dashboard",
        icon: MdDashboard,
    },
    {
        title: "Leaderboard",
        url: "/account/leaderboard",
        icon: GiPodiumWinner,
    },
    {
        title: "Food Item",
        url: "#",
        icon: PiBowlFoodFill,
    },
    {
        title: "Submission Status",
        url: "#",
        icon: SiBookstack,
    },
    {
        title: "Logs",
        url: "#",
        icon: IoLogoBuffer,
    },
    {
        title: "FAQ",
        url: "#",
        icon: FaQuestionCircle,
    },
    {
        title: "Contact/Support",
        url: "#",
        icon: FaEnvelope,
    },
]

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props} className={'border-none'}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild className={'hover:bg-black'}>
                            <div className={'flex flex-row gap-4 mb-2'}>
                                <div className={'flex flex-row gap-2 items-center'}>
                                    <div>
                                        <NifodaLogo width={30} height={30} fill={'white'}/>
                                    </div>
                                    <p className={'text-white font-semibold tracking-widest'}> NIFODA </p>
                                </div>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroupContent>
                    <SidebarMenu className={'p-2'}>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton asChild>
                                    <Link to={item.url}>
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
