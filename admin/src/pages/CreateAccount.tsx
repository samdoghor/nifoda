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
  Radio,
  RadioGroup,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const CreateAccount = () => {
  useEffect(() => {
    document.title = "Create Account | NIFODA Editor";
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
              <Box
                borderBottom={"2px"}
                borderColor={"ngDarkblue"}
                px={"2px"}
                pt={"2px"}
              >
                <Text color={"ngDarkblue"} fontSize={"2rem"} fontWeight={"700"}>
                  Create Account
                </Text>
              </Box>
              <Box pt={"1rem"}>
                <FormControl>
                  <Box>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter Email Address"
                      size="md"
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
                  <Box>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter First Name"
                      size="md"
                    />
                  </Box>
                  <Box>
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" placeholder="Enter Surname" size="md" />
                  </Box>
                  <Box>
                    <FormLabel>Are you a developer?</FormLabel>
                    <RadioGroup defaultValue="False">
                      <Stack spacing={5} direction="row">
                        <Radio value="True" colorScheme="green">
                          Yes
                        </Radio>
                        <Radio value="False" colorScheme="green">
                          No
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Box>
                  <Box display={"flex"} justifyContent={"center"}>
                    <Button
                      mt={4}
                      type="submit"
                      bg={"ngDarkblue"}
                      color={"white"}
                      as="a"
                      size={"lg"}
                      _hover={{ bg: "ngDarkerblue", cursor: "pointer" }}
                    >
                      Create Account
                    </Button>
                  </Box>
                  <Box display={"flex"} justifyContent={"center"} pt={"1rem"}>
                    or
                    <Link href="/" ps={"4px"}>
                      login
                    </Link>
                  </Box>
                </FormControl>
              </Box>
              <Box pt={{ base: "4rem", md: "0rem" }}>
                <Divider />
                <Footer />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default CreateAccount;
