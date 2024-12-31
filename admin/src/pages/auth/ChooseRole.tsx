import {Form} from "@nextui-org/form";
import {Button} from "@nextui-org/button";
import {HiChevronUpDown} from "react-icons/hi2";
import {Select, SelectItem} from "@nextui-org/select";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useToast} from "@/hooks/use-toast.ts";
import {EncryptionUtil} from "@/pages/utils/CipherUtil";

const roles = [
    {key: "contributor", label: "Contributor"},
    {key: "developer", label: "Developer"},
];

const encryptedContributor = EncryptionUtil(`${import.meta.env.VITE_REG_CONTRIBUTOR}`);
const encryptedDeveloper = EncryptionUtil(`${import.meta.env.VITE_REG_DEVELOPER}`);

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
                title: "Path Error",
                description: "Please select a path to continue",
                className: "bg-red-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
        }
    };

    useEffect(() => {
        localStorage.removeItem("selection");
    }, [])

    const handleRoleChange = (value: string) => {
        setSelectedRole(value);
    };

    return (
        <>
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
        </>
    )
}

export default ChooseRole;
