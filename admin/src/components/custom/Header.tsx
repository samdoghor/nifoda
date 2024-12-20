import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

const Header = () => {
    return (
        <>
            <Navbar className={'bg-neutral-950 text-white'} position="sticky">
                <NavbarBrand>
                    <AcmeLogo/>
                    <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link className={'text-white'} href="#">
                            How To
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={'text-white'} href="#">
                            The Story
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={'text-white'} href="#">
                            Contact Us
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Button as={Link} color="primary" href="#" variant="flat" className={'bg-green-800 text-white'}>
                            Sign In
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat"  className={'bg-green-800 text-white'}>
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
};
export default Header;
