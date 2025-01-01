"use client"

import {BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut,} from "lucide-react"

import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar"
import {useNavigate} from "react-router";
import {useAuthLogout} from "@/hooks/useAuthentication.ts";
import {useToast} from "@/hooks/use-toast.ts";
import {useFormik} from "formik";
import {useEffect} from "react";
import {AxiosError} from "axios";
import {ErrorResponseData} from "@/data/types/axiosErrorRes.ts";
import {Button} from "@nextui-org/button";
import {Form} from "@nextui-org/form";
import Cookies from "js-cookie";

export function NavUser({
                            user,
                        }: {
    user: {
        name: string
        email: string
        avatar: string
    }
}) {
    const {isMobile} = useSidebar()

    const navigate = useNavigate();

    const {
        mutate: createLogout,
        isError: isErrorLogout,
        isSuccess: isSuccessLogout,
        error: errorLogout,
        data: dataLogout
    } = useAuthLogout();

    const {toast} = useToast()

    const identifier = localStorage.getItem("_nfduidr");

    const formikLogout = useFormik({
        initialValues: {
            jwt_id: identifier,
        },
        onSubmit: values => {
            createLogout(values);
        },
    });

    useEffect(() => {

        if (isSuccessLogout) {
            toast({
                title: dataLogout?.code_message,
                description: dataLogout?.data,
                className: "bg-green-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
            Cookies.remove('_nfdt')
            Cookies.remove('_nfdldi')
            localStorage.removeItem('_nfdt');
            localStorage.removeItem('_nfdldi');
            localStorage.removeItem('_nfduidr');
            navigate("/", {replace: true});
            window.location.reload();
        }

        if (isErrorLogout) {
            console.log(errorLogout)
            toast({
                title: (errorLogout as AxiosError<ErrorResponseData>).response?.data.code_message,
                description: (errorLogout as AxiosError<ErrorResponseData>).response?.data.data,
                className: "bg-red-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
        }
    }, [isSuccessLogout, isErrorLogout, dataLogout, errorLogout, toast, navigate]);

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger className={'w-full'}>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground bg-neutral-950 hover:bg-neutral-900 hover:text-white"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user.avatar} alt={user.name}/>
                                <AvatarFallback
                                    className="rounded-lg bg-black border-white border-1">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">{user.name}</span>
                                <span className="truncate text-xs">{user.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4"/>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-black text-white border-1 border-neutral-800"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={user.avatar} alt={user.name}/>
                                    <AvatarFallback
                                        className="rounded-lg bg-black border-white border-1">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-semibold">{user.name}</span>
                                    <span className="truncate text-xs">{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className={'border-1 border-neutral-800'}/>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <BadgeCheck/>
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard/>
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell/>
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator className={'border-1 border-neutral-800'}/>
                        <Form onSubmit={formikLogout.handleSubmit}>
                            {/*<DropdownMenuItem className={'w-full !bg-none hover:!bg-none'}>*/}
                                <Button size="sm" type={'submit'} className={'w-full'}>
                                    <LogOut/>
                                    Log out
                                </Button>
                            {/*</DropdownMenuItem>*/}
                        </Form>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
