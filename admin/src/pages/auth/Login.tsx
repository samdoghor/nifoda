import Header from "@/components/custom/Header.tsx";
import Footer from "@/components/custom/Footer.tsx";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Form} from "@nextui-org/form";
import {Link} from "react-router";

const Login = () => {
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

                    <Form className={'w-full flex flex-col gap-8'} autoComplete={'on'}>

                        <Input
                            label="Email Address"
                            placeholder="Enter your email address" type="email" size={'sm'}
                            description="example: samdoghordev@gmail.com"
                            isRequired
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
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
                        />
                        <div className={'flex justify-end items-center w-full text-sm'}>
                            <Link to={'/auth/forgot-password'} className={'text-white hover:text-gray-500'}> Forgot your
                                password? </Link>
                        </div>
                        <div className={'flex justify-center items-center w-full'}>
                            <Button color="default" size="md"
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
