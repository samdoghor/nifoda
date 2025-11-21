import GradualSpacing from "@/components/ui/gradual-spacing";
import ReSideBar from "@/components/custom/ReSideBar";
import {useAPIKeyUpdateDeveloper, useFetchDeveloper} from "@/hooks/useDeveloper";
import {Button} from "@nextui-org/button";
import {Form} from "@nextui-org/form";
import {useToast} from "@/hooks/use-toast";
import {useFormik} from "formik";
import {useEffect, useState} from "react";
import {AxiosError} from "axios";
import {ErrorResponseData} from "@/data/types/axiosErrorRes";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const APIKey = () => {

    const {data: dataDeveloper} = useFetchDeveloper();
    const dataOfDeveloper = dataDeveloper?.data

    const [apiKeyData, setApiKeyData] = useState(dataOfDeveloper?.api_key)

    const {
        mutate: updateDeveloper,
        isError: isUpdateErrorDeveloper,
        isSuccess: isUpdateSuccessDeveloper,
        error: errorUpdateDeveloper,
        data: updateDataDeveloper
    } = useAPIKeyUpdateDeveloper();
    const {toast} = useToast()

    const formikUpdateDeveloper = useFormik({
        initialValues: {
            api_key: '',
        },
        onSubmit: values => {
            updateDeveloper(values);
        },
    });

    useEffect(() => {
        if (isUpdateSuccessDeveloper) {
            toast({
                title: updateDataDeveloper?.code_message,
                description: "A new API key has been generated",
                className: "bg-green-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
            setApiKeyData(updateDataDeveloper?.data.api_key)
        }

        if (isUpdateErrorDeveloper) {
            toast({
                title: (errorUpdateDeveloper as AxiosError<ErrorResponseData>).response?.data.code_message,
                description: (errorUpdateDeveloper as AxiosError<ErrorResponseData>).response?.data.data,
                className: "bg-red-900 text-white top-0 right-0 flex fixed md:max-w-[400px] md:max-h-[100px] md:top-4 md:right-4",
                duration: 3000,
                variant: 'default'
            })
        }
    }, [isUpdateSuccessDeveloper, isUpdateErrorDeveloper, updateDataDeveloper, errorUpdateDeveloper, toast]);

    const handleAlertDialogActionClick = () => {
        formikUpdateDeveloper.handleSubmit();
    };

    return (
        <>
            <ReSideBar pageTitle={"Access"}>
                <div className={'w-full min-h-screen text-white'}>
                    <div className={'min-h-screen p-4 bg-dashboard-cover bg-cover bg-center'}>
                        <div
                            className={'min-h-screen bg-zinc-950 opacity-95 rounded-2xl p-4 flex flex-col justify-center items-center'}>
                            <GradualSpacing
                                className="font-display text-center text-2xl font-bold tracking-tight text-white"
                                text="API Key"
                            />
                            <p className={'text-white text-sm tracking-widest w-[50%] text-center'}>
                                This credential authenticate and authorize API access. If compromised, generate a
                                new one to prevent unauthorized access and security risks.
                            </p>
                            <div className={'w-full flex flex-row justify-center items-center gap-4 mt-4'}>
                                <p className={'text-lg tracking-widest font-black'}>API Key: </p>
                                <p className={'blur-sm hover:blur-none'}> {apiKeyData ? apiKeyData : dataOfDeveloper?.api_key} </p>
                                <Form onSubmit={formikUpdateDeveloper.handleSubmit}>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button
                                                className={'bg-black text-white'}
                                            >
                                                Get a new API-Key
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. If you continue this will permanently
                                                    reset your API-KEY it will impact your applications that currently
                                                    use it.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={handleAlertDialogActionClick}
                                                    className={'bg-black text-white'}
                                                    {...formikUpdateDeveloper.getFieldProps('api_key')}
                                                >
                                                    Continue
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                    {/*<Button*/}
                                    {/*    type={'submit'}*/}
                                    {/*    className={'bg-black text-white'}*/}
                                    {/*    {...formikUpdateDeveloper.getFieldProps('api_key')}*/}
                                    {/*>*/}
                                    {/*    Get a new API-Key*/}
                                    {/*</Button>*/}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </ReSideBar>
        </>
    )
};

export default APIKey;
