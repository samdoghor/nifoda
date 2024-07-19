import { Box, chakra, Text } from "@chakra-ui/react";
import { Flowbite, Navbar } from "flowbite-react";
import { customTheme } from "../collections/flowbiteTheme";
import { Navlinks } from "../constants/navigation";

const Navigation = () => {
  return (
    <>
      <Box
        bg={"ngDarkblue"}
        opacity={".97"}
        px={{ base: "1rem", lg: "5rem" }}
        textAlign={"center"}
        position={"fixed"}
        width={"100vw"}
        zIndex={1000}
      >
        <Flowbite theme={{ theme: customTheme }}>
          <Navbar fluid rounded>
            <Navbar.Brand href="/">
              <chakra.span
                className="self-center whitespace-nowrap"
                fontWeight={"900"}
              >
                <chakra.span color={"white"} fontSize={"2rem"}>
                  NIFODA
                </chakra.span>
              </chakra.span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              {Navlinks.map((routes) => (
                <Navbar.Link key={routes.id} href={routes.path}>
                  <Text
                    fontSize={"1rem"}
                    overflow={"hidden"}
                    lineHeight={"1.5rem"}
                    paddingX={"1rem"}
                    paddingY={".6rem"}
                    backgroundColor={routes.backgroundColor}
                    textColor={routes.textColor}
                    rounded={routes.rounded}
                    _hover={{
                      backgroundColor: routes.hoverbackgroundColor,
                      textColor: routes.hovertextColor,
                    }}
                  >
                    {routes.element}
                  </Text>
                </Navbar.Link>
              ))}
            </Navbar.Collapse>
          </Navbar>
        </Flowbite>
      </Box>
    </>
  );
};

export default Navigation;
