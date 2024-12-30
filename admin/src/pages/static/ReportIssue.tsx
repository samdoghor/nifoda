import {Link} from "@nextui-org/link";
import {Form} from "@nextui-org/form";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {FaCloudUploadAlt} from "react-icons/fa";
import React, {useRef, useState} from "react";
import NifodaLogo from "@/components/custom/NifodaLogo.tsx";

const ReportIssue = () => {
    const [file, setFile] = useState<File | null>(null);
    const hiddenInput = useRef<HTMLInputElement>(null);

    const onFilePickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = event.target;
        if (files && files.length > 0) {
            setFile(files[0]); // Accept only one file
        }
    };

    const handleButtonClick = () => {
        hiddenInput.current?.click(); // Optional chaining to handle null checks
    };

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
                <h1 className={'font-black tracking-wide'}> Report Issue(s) </h1>
                <p className={'w-2/4 text-center tracking-wide leading-relaxed text-sm'}> If you observe any issue with
                    any part
                    of the application/API please feel free to submit the issue
                    by filling the form below or raising it up on <Link className={'text-green-800 hover:text-gray-500'}
                                                                        isExternal showAnchorIcon
                                                                        href="https://github.com/samdoghor/nifoda/issues">
                        github issues
                    </Link> if you are a developer. </p>
                <p className={'leading-relaxed'}> Thank your interest in NIFODA </p>

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
                            label="Description of the Issue(s)"
                            placeholder="Enter a complete detail of the issue you observed"
                            isClearable
                            color={'secondary'}
                            variant="underlined"
                            classNames={{label: '!text-gray-400 mb-4', input: 'text-white'}}
                            className={'text-white'}
                            minRows={6}
                            maxRows={8}
                        />
                        <div
                            className="flex flex-col justify-center items-center gap-4 border-1 border-white border-dashed w-full rounded-3xl min-h-40 py-6">
                            <p> Choose an image </p>
                            <p className={'text-sm text-gray-600'}> only one image is accepted (png, jpeg and jpg) </p>
                            <Button color={undefined} onPress={handleButtonClick}>
                                <FaCloudUploadAlt className={'text-2xl'}/>
                            </Button>
                            <Input
                                placeholder="Choose an image" type="file" size={'sm'}
                                ref={hiddenInput}
                                className={'hidden'}
                                onChange={onFilePickerChange}
                                accept=".png,.jpeg,.jpg"
                            />
                            <p>{file && <span>{file.name}</span>}</p>
                        </div>
                        <Button color="default" size="lg"
                                className={'w-full font-semibold text-base tracking-widest'}> Send Report </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};
export default ReportIssue;
