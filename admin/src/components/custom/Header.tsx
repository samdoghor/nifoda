import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import NifodaLogo from "../custom/NifodaLogo"

const Header = () => {
    return (
        <>
            <Navbar className={'bg-neutral-950 text-white'} position="sticky">
                <NavbarBrand>
                    <Link as={'a'} href={'/'} className={'text-white'}>
                    <NifodaLogo width={36} height={36} fill="#4ade80" />
                    <p className="font-bold text-inherit pl-2">NIFODA</p>
                    </Link>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-6" justify="center">
                    <NavbarItem>
                        <Link className={'text-white font-semibold'} href="https://github.com/samdoghor/nifoda" isExternal showAnchorIcon>
                            Github Repo
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={'text-white font-semibold'} href="#">
                            Report Issues
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link className={'text-white font-semibold'} href="#">
                            Make Suggestions
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
