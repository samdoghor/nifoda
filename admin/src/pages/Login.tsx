import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Image,
  Input,
  Link,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Login = () => {
  useEffect(() => {
    document.title = "Login | NIFODA Editor";
  }, []);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box minHeight={"100vh"}>
        <Grid templateColumns={{ md: "repeat(2, 1fr)" }}>
          <GridItem
            w={"100%"}
            bg={"ngDarkblue"}
            h={{ base: "50vh", md: "100vh" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w={"60%"}>
              <Image
                src="src/assets/img/nigeria_flag.jpg"
                alt="Nigeria Flag & Coat of Arms"
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                mx={"auto"}
                my={"auto"}
                fallbackSrc="https://via.placeholder.com/150"
              />
              <Text
                color={"white"}
                fontSize={"2rem"}
                fontWeight={"700"}
                align={"center"}
              >
                The Nigeria Food Database API (NIFODA)
              </Text>

              <Text
                color={"gray.600"}
                fontSize={"1.5rem"}
                fontWeight={"700"}
                align={"center"}
              >
                Content Editor Page
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w={"100%"}
            bg={"white"}
            minH={{ base: "70vh", md: "100vh" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w={"60%"}>
              <Box borderBottom={"2px"} borderColor={"ngDarkblue"} p={"2px"}>
                <Text color={"ngDarkblue"} fontSize={"2rem"} fontWeight={"700"}>
                  Login
                </Text>
              </Box>
              <Box pt={"2rem"}>
                <FormControl>
                  <Box>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      placeholder="Enter Email Address"
                      size="md"
                      type="email"
                    />
                  </Box>
                  <Box>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Button
                      mt={4}
                      type="submit"
                      bg={"ngDarkblue"}
                      color={"white"}
                      as="a"
                      _hover={{ bg: "ngDarkerblue", cursor: "pointer" }}
                      size={"lg"}
                    >
                      Login
                    </Button>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    pt={{ base: "1rem", md: "2rem" }}
                  >
                    or
                    <Link href="/createaccount" ps={"4px"}>
                      create account
                    </Link>
                  </Box>
                </FormControl>
              </Box>
              <Footer />
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
