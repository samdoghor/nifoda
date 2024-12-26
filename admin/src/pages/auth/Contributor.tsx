import Header from "@/components/custom/Header.tsx";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import Footer from "@/components/custom/Footer.tsx";
import {Link, useNavigate} from "react-router";
import {useFormik} from "formik";
import {useToast} from "@/hooks/use-toast";
import {useEffect} from "react";
import {useCreateContributor} from "@/hooks/useContributor.ts";

const Contributor = () => {

    const navigate = useNavigate();

    const {mutate: createContributor, isError: isErrorContributor, isSuccess: isSuccessContributor, error: errorContributor, data: dataContributor} = useCreateContributor();
    const {toast} = useToast()

    const formikContributor = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            middle_name: '',
            email_address: '',
            password: '',
        },
        onSubmit: values => {
            createContributor(values);
        },
    });

    useEffect(() => {

        const userRole = localStorage.getItem("role");

        if (userRole !== "contributor") {
            navigate("/auth/signup");
        }

        if (isSuccessContributor) {
            toast({
                title: dataContributor?.code_message,
                description: dataContributor?.data,
            })
        }

        if (isErrorContributor) {
            toast({
                title: errorContributor?.name,
                description: errorContributor?.message,
            });
        }
    }, [isSuccessContributor, isErrorContributor, dataContributor, errorContributor, toast, navigate]);


    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>
            <div className={'w-full flex flex-col justify-center items-center min-h-screen bg-black py-20'}>
                <div className={'bg-neutral-950 w-2/6 rounded-2xl flex flex-col p-10 border-gray-600 border'}>
                    <h3 className={'font-bold text-2xl tracking-widest text-white'}> For Contributors</h3>
                    <p className={'text-xs pt-2 pb-10 text-gray-400 leading-loose tracking-widest'}> If you are
                        registering as a developer,
                        after registration,
                        login to see your API Key and Secret Key </p>

                    <Form className={'w-full flex flex-col gap-8'} autoComplete={'on'} onSubmit={formikContributor.handleSubmit}>

                        <Input
                            label="First Name"
                            placeholder="Enter your first name" type="text" size={'sm'}
                            description="example: Doghor"
                            isRequired
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            onChange={formikContributor.handleChange}
                            value={formikContributor.values.first_name}
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
                            onChange={formikContributor.handleChange}
                            value={formikContributor.values.last_name}
                        />
                        <Input
                            label="Middle Name"
                            placeholder="Enter your middle name" type="text" size={'sm'}
                            description="example: Destiny"
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            onChange={formikContributor.handleChange}
                            value={formikContributor.values.middle_name}
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
                            onChange={formikContributor.handleChange}
                            value={formikContributor.values.email_address}
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
                            onChange={formikContributor.handleChange}
                            value={formikContributor.values.password}
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
export default Contributor;
