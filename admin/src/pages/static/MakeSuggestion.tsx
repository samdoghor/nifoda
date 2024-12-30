import {Form} from "@nextui-org/form";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import NifodaLogo from "@/components/custom/NifodaLogo.tsx";

const MakeSuggestion = () => {
    return (
        <>
            <div
                className={'w-full flex flex-col justify-center items-center min-h-screen bg-black text-white py-8'}>
                <NifodaLogo width={150} height={150} fill={"#4ade80"}/>
                <h1 className="text-5xl font-extrabold tracking-widest !leading-[0] text-white my-8">
                    NIFODA
                </h1>
                <h2 className="text-xl font-extrabold tracking-widest !leading-[0] text-green-200 mt-4 mb-16">
                    Nigeria Food Database/API
                </h2>
                <h1 className={'font-black tracking-wide'}> Make Suggestion(s) </h1>
                <p className={'w-2/4 text-center tracking-wide leading-relaxed text-sm'}>
                    If you think there are places we can improve NIFODA please do suggestion. In terms of features, UI,
                    functionality. e.t.c. There is a place you can include link(s) to sample of what you want.
                </p>
                <p className={'leading-relaxed'}> Thank your interest to improve NIFODA </p>

                <div className={'my-8 py-16 px-20 w-2/4 bg-neutral-950 rounded-3xl border-gray-600 border'}>
                    <Form className={'w-full flex flex-col justify-center items-center gap-8'} autoComplete={'on'}>
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name" type="text" size={'sm'}
                            description="example: Samuel Doghor"
                            isRequired
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
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
                        />
                        <Input
                            label="Github Link"
                            placeholder="Enter your github link" type="url" size={'sm'}
                            description="example: https://github.com/samdoghor"
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                        />
                        <Textarea
                            isRequired
                            label="Description of the Suggestion(s)"
                            placeholder="Enter a complete detail of the suggestion you are making"
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            className={'text-white'}
                            minRows={6}
                            maxRows={8}
                        />
                        <Textarea
                            isRequired
                            label="Links Sample"
                            placeholder="Enter the links to sites you would love us to model"
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            className={'text-white'}
                            minRows={2}
                            maxRows={4}
                            description="please separate the links with new lines"
                        />

                        <Button color="default" size="lg"
                                className={'w-full font-semibold text-base tracking-widest'}> Send Improvement </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};
export default MakeSuggestion;
