import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "react-router";
import NifodaLogo from "../custom/NifodaLogo"
import {IoOpen} from "react-icons/io5";

const Header = () => {
    return (
        <>
            <Navbar className={'bg-neutral-950 text-white'} position="sticky">
                <NavbarBrand>
                    <Link to={'/'} className={'text-white flex justify-center items-center flex-row gap-2'}>
                        <NifodaLogo width={36} height={36} fill="#4ade80"/>
                        <p className="font-bold text-inherit pl-2">NIFODA</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-6" justify="center">
                    <NavbarItem>
                        <Link className={'text-white font-semibold flex justify-center items-center flex-row gap-2'}
                              to="https://github.com/samdoghor/nifoda" target={'_blank'}>
                            Github Repo <IoOpen/>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={'text-white font-semibold'} to="/report-issues">
                            Report Issue(s)
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={'text-white font-semibold'} to="/make-suggestions">
                            Make Suggestion(s)
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
                        <Button as={Link} color="primary" href="#" variant="flat" className={'bg-green-800 text-white'}>
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
};
export default Header;
