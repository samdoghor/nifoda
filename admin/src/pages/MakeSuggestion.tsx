import Header from "@/components/custom/Header.tsx";
import {Form} from "@nextui-org/form";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import Footer from "@/components/custom/Footer.tsx";

const MakeSuggestion = () => {
    return (
        <>
            <div className={'w-full flex flex-col justify-center items-center'}>
                <Header/>
            </div>

            <div
                className={'w-full flex flex-col justify-center items-center min-h-screen bg-neutral-950 text-white py-8'}>
                <h1 className={'font-black tracking-wide'}> Make Suggestion(s) </h1>
                <p className={'w-2/4 text-center tracking-wide leading-relaxed text-sm'}>
                    If you think there are places we can improve NIFODA please do suggestion. In terms of features, UI,
                    functionality. e.t.c. There is a place you can include link(s) to sample of what you want.
                </p>
                <p className={'leading-relaxed'}> Thank your interest to improve NIFODA </p>

                <div className={'my-8 py-16 px-20 w-2/4 bg-black rounded-3xl'}>
                    <Form className={'w-full flex flex-col justify-center items-center gap-8'} autoComplete={'on'}>
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name" type="text" size={'sm'}
                            description="example: Samuel Doghor"
                            isRequired
                            isClearable
                            color={'default'}
                            variant="underlined"
                        />
                        <Input
                            label="Email Address"
                            placeholder="Enter your email address" type="email" size={'sm'}
                            description="example: samdoghordev@gmail.com"
                            isRequired
                            isClearable
                            color={'default'}
                            variant="underlined"
                        />
                        <Input
                            label="Github Link"
                            placeholder="Enter your github link" type="url" size={'sm'}
                            description="example: https://github.com/samdoghor"
                            isClearable
                            color={'default'}
                            variant="underlined"
                        />
                        <Textarea
                            isRequired
                            label="Description of the Suggestion(s)"
                            placeholder="Enter a complete detail of the suggestion you are making"
                            isClearable
                            color={'default'}
                            variant="underlined"
                            className={'text-white'}
                            minRows={6}
                            maxRows={8}
                        />
                        <Textarea
                            isRequired
                            label="Links Sample"
                            placeholder="Enter the links to sites you would love us to model"
                            isClearable
                            color={'default'}
                            variant="underlined"
                            className={'text-white'}
                            minRows={2}
                            maxRows={4}
                            description="please separate the links with new lines"
                        />

                        <Button color="default" size="lg"> Send Improvement </Button>
                    </Form>
                </div>
            </div>

            <div className={'w-full flex flex-col justify-center items-center bg-black'}>
                <Footer/>
            </div>
        </>
    );
};
export default MakeSuggestion;
