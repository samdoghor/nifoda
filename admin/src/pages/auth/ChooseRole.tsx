import Header from "@/components/custom/Header.tsx";
import {Form} from "@nextui-org/form";
import {Button} from "@nextui-org/button";
import Footer from "@/components/custom/Footer.tsx";
import {HiChevronUpDown} from "react-icons/hi2";
import {Select, SelectItem} from "@nextui-org/select";
import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useToast} from "@/hooks/use-toast.ts";

const roles = [
    {key: "contributor", label: "Contributor"},
    {key: "developer", label: "Developer"},
];

const ChooseRole = () => {

    const {toast} = useToast()

    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedRole === "developer") {
            localStorage.setItem("role", "developer");
            navigate("/auth/signup/developer");
        } else if (selectedRole === "contributor") {
            localStorage.setItem("role", "contributor");
            navigate("/auth/signup/contributor");
        } else {
            toast({
                title: "Error",
                description: "Please select a role",
            })
        }
    };

    const handleRoleChange = (value: string) => {
        setSelectedRole(value); // Update the selected role when changed
    };

    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>

            <div className={'w-full flex flex-col justify-center items-center min-h-screen bg-black text-white py-8'}>
                <div className={'my-8 py-16 px-20 w-2/4 bg-neutral-950 rounded-3xl border-gray-600 border'}>
                    <Form className={'w-full flex flex-col justify-center items-center gap-8'} autoComplete={'on'} onSubmit={handleSubmit}>
                        <Select
                            disableSelectorIconRotation
                            label="Developer or Contributor?"
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
