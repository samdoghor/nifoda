import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Form} from "@nextui-org/form";
import {Link, useNavigate} from "react-router";
import {useToast} from "@/hooks/use-toast";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useEffect, useState} from "react";
import {AxiosError} from "axios";
import {ErrorResponseData} from "@/data/types/axiosErrorRes";
import {useAuthLogin} from "@/hooks/useAuthentication";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = () => {

    const navigate = useNavigate();

    const {
        mutate: createLogin,
        isError: isErrorLogin,
        isSuccess: isSuccessLogin,
        error: errorLogin,
        data: dataLogin
    } = useAuthLogin();

    const {toast} = useToast()

    const formikLogin = useFormik({
        initialValues: {
            email_address: '',
            password: '',
        },
        validationSchema: Yup.object({
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
            createLogin(values);
        },
    });

    useEffect(() => {

        if (isSuccessLogin) {
            toast({
                title: dataLogin?.code_message,
                description: dataLogin?.data,
                className: "bg-green-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
            navigate("/profile");
        }

        if (isErrorLogin) {
            toast({
                title: (errorLogin as AxiosError<ErrorResponseData>).response?.data.code_message,
                description: (errorLogin as AxiosError<ErrorResponseData>).response?.data.data,
                className: "bg-red-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
        }
    }, [isSuccessLogin, isErrorLogin, dataLogin, errorLogin, toast, navigate]);

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>
            <div className={'w-full flex flex-col justify-center items-center min-h-screen bg-black py-20'}>
                <div className={'bg-neutral-950 w-2/6 rounded-2xl flex flex-col p-10 border-gray-600 border'}>
                    <h3 className={'font-bold text-2xl tracking-widest text-white'}> Login </h3>
                    <p className={'text-xs pt-2 pb-10 text-gray-400 leading-loose tracking-widest'}> Enter your email and password below to login to your
                        account </p>

                    <Form className={'w-full flex flex-col gap-8'} autoComplete={'on'}
                          onSubmit={formikLogin.handleSubmit}>

                        <div className={'w-full'}>
                            <Input
                                label="Email Address"
                                placeholder="Enter your email address" type="email" size={'sm'}
                                description="example: samdoghordev@gmail.com"
                                isRequired
                                color={'secondary'}
                                variant="underlined"
                                classNames={{label: '!text-gray-400 mb-4', input: '!text-white autoFillTextWhite'}}
                                {...formikLogin.getFieldProps('email_address')}
                            />
                            {formikLogin.touched.email_address && formikLogin.errors.email_address ? (
                                <div
                                    className={'text-red-600 text-xs ms-1'}>{formikLogin.errors.email_address}</div>
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
                                {...formikLogin.getFieldProps('password')}
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
                            {formikLogin.touched.password && formikLogin.errors.password ? (
                                <div className={'text-red-600 text-xs ms-1'}>{formikLogin.errors.password}</div>
                            ) : null}
                        </div>
                        <div className={'flex justify-end items-center w-full text-sm'}>
                            <Link to={'/auth/forgot-password'} className={'text-white hover:text-gray-500'}> Forgot your
                                password? </Link>
                        </div>
                        <div className={'flex justify-center items-center w-full'}>
                            <Button color="default" size="md" type={'submit'}
                                    className={'w-full font-semibold text-base tracking-widest'}> Login </Button>
                        </div>
                    </Form>
                    <div className={'flex justify-center items-center w-full text-sm pt-6'}>
                        <p className={'text-white'}>
                            Don't have an account?
                            <Link to={'/auth/signup'}
                                  className={'text-white hover:text-gray-500 ps-2 underline-offset-2 underline'}>
                                Sign up
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
export default Login;
