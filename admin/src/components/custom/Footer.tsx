import NifodaLogo from "@/components/custom/NifodaLogo";
import {Link} from "@nextui-org/link";

const Footer = () => {
    return (
        <>
            <footer className="bg-black w-3/4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <Link as={'a'} href={'/'} className={'text-white'}>
                            <NifodaLogo width={36} height={36} fill="#ffffff"/>
                            <p className="font-bold text-inherit pl-2">NIFODA</p>
                        </Link>
                    </div>

                    <p className="text-sm text-white text-right ">
                        Copyright &copy; {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};
export default Footer;
