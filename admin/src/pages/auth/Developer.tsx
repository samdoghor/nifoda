import {useCreateContributor} from "@/hooks/useContributor.ts";
import {useToast} from "@/hooks/use-toast.ts";
import {useFormik} from "formik";
import {useEffect} from "react";
import Header from "@/components/custom/Header.tsx";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Link, useNavigate} from "react-router";
import Footer from "@/components/custom/Footer.tsx";
import CryptoJS from "crypto-js";

const userRole = localStorage.getItem("selection");
const decryptedDeveloper = userRole ? CryptoJS.AES.decrypt(userRole, `${import.meta.env.VITE_SECRET_KEY}`).toString(CryptoJS.enc.Utf8) : null;

const Developer = () => {

    const navigate = useNavigate();

    const {mutate: createDeveloper, isError: isErrorDeveloper, isSuccess: isSuccessDeveloper, error: errorDeveloper, data: dataDeveloper} = useCreateContributor();
    const {toast} = useToast()

    const formikDeveloper = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            middle_name: '',
            email_address: '',
            password: '',
        },
        onSubmit: values => {
            createDeveloper(values);
        },
    });

    useEffect(() => {

        if (decryptedDeveloper !== `${import.meta.env.VITE_REG_DEVELOPER}`) {
            navigate("/auth/signup");
        }

        if (isSuccessDeveloper) {
            toast({
                title: dataDeveloper?.code_message,
                description: dataDeveloper?.data,
            })
        }

        if (isErrorDeveloper) {
            toast({
                title: errorDeveloper?.name,
                description: errorDeveloper?.message,
            });
        }
    }, [isSuccessDeveloper, isErrorDeveloper, dataDeveloper, errorDeveloper, toast]);

    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>
            <div className={'w-full flex flex-col justify-center items-center min-h-screen bg-black py-20'}>
                <div className={'bg-neutral-950 w-2/6 rounded-2xl flex flex-col p-10 border-gray-600 border'}>
                    <h3 className={'font-bold text-2xl tracking-widest text-white'}> For Developers </h3>
                    <p className={'text-xs pt-2 pb-10 text-gray-400 leading-loose tracking-widest'}> If you are
                        registering as a developer,
                        after registration,
                        login to see your API Key and Secret Key </p>

                    <Form className={'w-full flex flex-col gap-8'} autoComplete={'on'} onSubmit={formikDeveloper.handleSubmit}>

                        <Input
                            label="First Name"
                            placeholder="Enter your first name" type="text" size={'sm'}
                            description="example: Doghor"
                            isRequired
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            onChange={formikDeveloper.handleChange}
                            value={formikDeveloper.values.first_name}
                        />
                        <Input
                            label="Last Name"
                            placeholder="Enter your last name" type="text" size={'sm'}
                            description="example: Samuel"
                            isRequired
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            onChange={formikDeveloper.handleChange}
                            value={formikDeveloper.values.last_name}
                        />
                        <Input
                            label="Middle Name"
                            placeholder="Enter your middle name" type="text" size={'sm'}
                            description="example: Destiny"
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            onChange={formikDeveloper.handleChange}
                            value={formikDeveloper.values.middle_name}
                        />
                        <Input
                            label="Email Address"
                            placeholder="Enter your email address" type="email" size={'sm'}
                            description="example: samdoghordev@gmail.com"
                            isRequired
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            onChange={formikDeveloper.handleChange}
                            value={formikDeveloper.values.email_address}
                        />
                        <Input
                            label="Password"
                            placeholder="Enter your password" type="password" size={'sm'}
                            description="example: Password@1"
                            isClearable
                            isRequired
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            onChange={formikDeveloper.handleChange}
                            value={formikDeveloper.values.password}
                        />
                        <div className={'flex justify-center items-center w-full'}>
                            <Button color="default" size="md"
                                    className={'w-full font-semibold text-base tracking-widest'}> Register </Button>
                        </div>
                    </Form>
                    <div className={'flex justify-center items-center w-full text-sm pt-6'}>
                        <p className={'text-white'}>
                            Already have an account?
                            <Link to={'/auth/login'}
                                  className={'text-white hover:text-gray-500 ps-2 underline-offset-2 underline'}>
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className={'w-full flex flex-col justify-center items-center bg-black'}>
                <Footer/>
            </div>
        </>
    );
};
export default Developer;
