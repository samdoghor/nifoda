import Header from "@/components/custom/Header.tsx";
import {Form} from "@nextui-org/form";
import {Button} from "@nextui-org/button";
import Footer from "@/components/custom/Footer.tsx";
import {HiChevronUpDown} from "react-icons/hi2";
import {Select, SelectItem} from "@nextui-org/select";
import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useToast} from "@/hooks/use-toast.ts";
import CryptoJS from 'crypto-js';

const roles = [
    {key: "contributor", label: "Contributor"},
    {key: "developer", label: "Developer"},
];

const encryptedContributor = CryptoJS.AES.encrypt(`${import.meta.env.VITE_REG_CONTRIBUTOR}`, `${import.meta.env.VITE_SECRET_KEY}`).toString();
const encryptedDeveloper = CryptoJS.AES.encrypt(`${import.meta.env.VITE_REG_DEVELOPER}`, `${import.meta.env.VITE_SECRET_KEY}`).toString();


const ChooseRole = () => {

    const {toast} = useToast()

    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedRole === "contributor") {
            localStorage.setItem("selection", encryptedContributor);
            navigate("/auth/signup/contributor");
        } else if (selectedRole === "developer") {
            localStorage.setItem("selection", encryptedDeveloper);
            navigate("/auth/signup/developer");
        } else {
            toast({
                title: "Error",
                description: "Please select a role",
            })
        }
    };

    const handleRoleChange = (value: string) => {
        setSelectedRole(value);
    };

    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>

            <div className={'w-full flex flex-col justify-center items-center min-h-screen bg-black text-white py-8'}>
                <div className={'w-2/4 text-center leading-relaxed tracking-widest text-sm'}>
                    <p> You can either signup as a contributor or a developer. </p>
                    <p> Contributors add food information to our database manually, no API key provided. Developers
                        receive
                        an API key to integrate NIFODA with their products and services. </p>
                </div>
                <div className={'my-8 py-16 px-20 w-2/4 bg-neutral-950 rounded-3xl border-gray-600 border'}>

                    <Form className={'w-full flex flex-col justify-center items-center gap-8'} autoComplete={'on'}
                          onSubmit={handleSubmit}>
                        <Select
                            disableSelectorIconRotation
                            label="Contributor or Developer?"
                            labelPlacement="outside"
                            placeholder="Select a Path"
                            selectorIcon={<HiChevronUpDown/>}
                            classNames={{
                                label: '!text-gray-400 mb-4',
                                trigger: '!bg-neutral-950 border border-b-white',
                                listboxWrapper: 'bg-neutral-900 text-white border-0 rounded-2xl p-4',
                                popoverContent: 'bg-neutral-950 text-white border-0'
                            }}
                            color={'secondary'}
                            size={'sm'}
                            isRequired
                            onChange={(e) => handleRoleChange(e.target.value)}
                            value={selectedRole || ""}
                        >
                            {roles.map((role) => (
                                <SelectItem key={role.key}>{role.label}</SelectItem>
                            ))}
                        </Select>
                        <Button color="default" size="lg" type="submit"
                                className={'w-full font-semibold text-base tracking-widest'}> Proceed </Button>
                    </Form>
                </div>
            </div>

            <div className={'w-full flex flex-col justify-center items-center bg-black'}>
                <Footer/>
            </div>
        </>
    )
}

export default ChooseRole;
