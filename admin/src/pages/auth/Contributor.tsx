import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Link, useNavigate} from "react-router";
import {useFormik} from "formik";
import {useToast} from "@/hooks/use-toast";
import {useEffect, useState} from "react";
import {useCreateContributor} from "@/hooks/useContributor";
import * as Yup from 'yup';
import {IoIosEye, IoIosEyeOff} from "react-icons/io";
import {AxiosError} from "axios";
import {ErrorResponseData} from "@/data/types/axiosErrorRes";
import {DecryptionUtil} from "@/pages/utils/CipherUtil.ts";


const userRole = localStorage.getItem("selection");
const decryptedContributor = userRole ? DecryptionUtil(userRole) : null;

const Contributor = () => {

    const navigate = useNavigate();

    const {
        mutate: createContributor,
        isError: isErrorContributor,
        isSuccess: isSuccessContributor,
        error: errorContributor,
        data: dataContributor
    } = useCreateContributor();
    const {toast} = useToast()

    const formikContributor = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            middle_name: '',
            email_address: '',
            password: '',
        },
        validationSchema: Yup.object({
            first_name: Yup.string()
                .max(25, 'At most 25 characters or less')
                .required('First Name is Required'),
            last_name: Yup.string()
                .max(25, 'At most 25 characters or less')
                .required('Last Name is Required'),
            email_address: Yup.string()
                .email('Invalid email address')
                .required('Email Address is Required'),
            password: Yup.string()
                .min(8, 'Must be at least 8 characters or more')
                .required('Password is Required')
                .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
        }),
        onSubmit: values => {
            createContributor(values);
        },
    });

    useEffect(() => {

        if (decryptedContributor !== `${import.meta.env.VITE_REG_CONTRIBUTOR}`) {
            navigate("/auth/signup");
        }

        if (isSuccessContributor) {
            localStorage.removeItem("selection");
            toast({
                title: dataContributor?.code_message,
                description: dataContributor?.data,
                className: "bg-green-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
            navigate("/auth/login");
        }

        if (isErrorContributor) {
            toast({
                title: (errorContributor as AxiosError<ErrorResponseData>).response?.data.code_message,
                description: (errorContributor as AxiosError<ErrorResponseData>).response?.data.data,
                className: "bg-red-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
        }
    }, [isSuccessContributor, isErrorContributor, dataContributor, errorContributor, toast, navigate]);

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);


    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center min-h-screen bg-black py-20'}>
                <div className={'bg-neutral-950 w-2/5 rounded-2xl flex flex-col p-10 border-gray-600 border'}>
                    <h3 className={'font-bold text-2xl tracking-widest text-white'}> For Contributors</h3>
                    <p className={'text-xs pt-2 pb-10 text-gray-400 leading-loose tracking-widest'}> If you are
                        registering as a developer,
                        after registration,
                        login to see your API Key and Secret Key </p>

                    <Form className={'w-full flex flex-col gap-8 '} autoComplete={'on'}
                          onSubmit={formikContributor.handleSubmit}>

                        <div className={'w-full'}>
                            <Input
                                label="First Name"
                                placeholder="Enter your first name" type="text" size={'sm'}
                                description="example: Doghor"
                                isRequired
                                color={'secondary'}
                                variant="underlined"
                                classNames={{label: '!text-gray-400 mb-4', input: '!text-white autoFillTextWhite'}}
                                {...formikContributor.getFieldProps('first_name')}
                            />
                            {formikContributor.touched.first_name && formikContributor.errors.first_name ? (
                                <div className={'text-red-600 text-xs ms-1'}>{formikContributor.errors.first_name}</div>
                            ) : null}
                        </div>
                        <div className={'w-full'}>
                            <Input
                                label="Last Name"
                                placeholder="Enter your last name" type="text" size={'sm'}
                                description="example: Samuel"
                                isRequired
                                color={'secondary'}
                                variant="underlined"
                                classNames={{label: '!text-gray-400 mb-4', input: '!text-white autoFillTextWhite'}}
                                {...formikContributor.getFieldProps('last_name')}
                            />
                            {formikContributor.touched.last_name && formikContributor.errors.last_name ? (
                                <div className={'text-red-600 text-xs ms-1'}>{formikContributor.errors.last_name}</div>
                            ) : null}
                        </div>
                        <div className={'w-full'}>
                            <Input
                                label="Middle Name"
                                placeholder="Enter your middle name" type="text" size={'sm'}
                                description="example: Destiny"
                                color={'secondary'}
                                variant="underlined"
                                classNames={{label: '!text-gray-400 mb-4', input: '!text-white autoFillTextWhite'}}
                                {...formikContributor.getFieldProps('middle_name')}
                            />
                        </div>
                        <div className={'w-full'}>
                            <Input
                                label="Email Address"
                                placeholder="Enter your email address" type="email" size={'sm'}
                                description="example: samdoghordev@gmail.com"
                                isRequired
                                color={'secondary'}
                                variant="underlined"
                                classNames={{label: '!text-gray-400 mb-4', input: '!text-white autoFillTextWhite'}}
                                {...formikContributor.getFieldProps('email_address')}
                            />
                            {formikContributor.touched.email_address && formikContributor.errors.email_address ? (
                                <div
                                    className={'text-red-600 text-xs ms-1'}>{formikContributor.errors.email_address}</div>
                            ) : null}
                        </div>
                        <div className={'w-full'}>
                            <Input
                                label="Password"
                                placeholder="Enter your password" type={isVisible ? "text" : "password"} size={'sm'}
                                description="example: Password@1"
                                isRequired
                                color={'secondary'}
                                variant="underlined"
                                classNames={{label: '!text-gray-400 mb-4', input: '!text-white autoFillTextWhite'}}
                                {...formikContributor.getFieldProps('password')}
                                endContent={
                                    <button
                                        aria-label="toggle password visibility"
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleVisibility}
                                    >
                                        {isVisible ? (
                                            <IoIosEye className="text-2xl text-default-400 pointer-events-none"/>
                                        ) : (
                                            <IoIosEyeOff className="text-2xl text-default-400 pointer-events-none"/>
                                        )}
                                    </button>
                                }
                            />
                            {formikContributor.touched.password && formikContributor.errors.password ? (
                                <div className={'text-red-600 text-xs ms-1'}>{formikContributor.errors.password}</div>
                            ) : null}
                        </div>
                        <div className={'flex justify-center items-center w-full'}>
                            <Button color="default" size="md" type={'submit'}
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
        </>
    );
};
export default Contributor;
