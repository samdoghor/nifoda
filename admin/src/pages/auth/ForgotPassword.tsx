import Header from "@/components/custom/Header.tsx";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import Footer from "@/components/custom/Footer.tsx";

const ForgotPassword = () => {
    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>
            <div className={'w-full flex flex-col justify-center items-center min-h-screen bg-black'}>
                <div className={'bg-neutral-950 w-2/6 rounded-2xl flex flex-col p-10 border-gray-600 border'}>
                    <h3 className={'font-bold text-2xl tracking-widest text-white pb-10'}> Forgotten Password </h3>
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
                        <div className={'flex justify-center items-center w-full'}>
                            <Button color="default" size="md"
                                    className={'w-full font-semibold text-base tracking-widest'}> Reset Password </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <div className={'w-full flex flex-col justify-center items-center bg-black'}>
                <Footer/>
            </div>
        </>
    );
};
export default ForgotPassword;
