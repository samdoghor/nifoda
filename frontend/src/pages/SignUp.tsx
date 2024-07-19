import {
  Box,
  Text,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up | NIFODA ";
  }, []);

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <Box>
        <Box w={"100%"} minH={"100vh"}>
          <Box px={{ base: "1rem", lg: "8rem" }} py={"8rem"}>
            <Box
              display={"grid"}
              overflow={"hidden"}
              gridTemplateColumns={{
                md: "repeat(2, 1fr)",
              }}
            >
              <Box
                p={"1.5rem"}
                bg={"ngDarkerblue"}
                rounded={"2xl"}
                width={"100%"}
                padding={"12"}
              >
                <Text
                  fontSize={"2.4rem"}
                  color={"white"}
                  fontWeight={"900"}
                  fontFamily={"overpass"}
                  display={"flex"}
                >
                  Sign Up
                </Text>

                <Text
                  textColor={"white"}
                  fontSize={"1rem"}
                  pt={"1rem"}
                  lineHeight={"2rem"}
                  overflow={"hidden"}
                >
                  Please share some of your details with us so that we can
                  authorize your access to the Nigeria Food Database API
                  (NIFODA).
                </Text>
                <FormControl>
                  <Stack
                    spacing={2}
                    pt={"2rem"}
                    overflow={"hidden"}
                    textColor={"white"}
                  >
                    <Text fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>
                      First name
                    </Text>
                    <Input
                      placeholder="Enter First Name"
                      size="md"
                      type="text"
                    />
                    <Text fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>
                      Last name
                    </Text>
                    <Input
                      placeholder="Enter Last Name"
                      size="md"
                      type="text"
                    />
                    <Text fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>
                      Email address
                    </Text>
                    <Input
                      placeholder="Enter Email address"
                      size="md"
                      type="email"
                    />
                    <Text fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>
                      Password
                    </Text>
                    <InputGroup size="md">
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter Password"
                      />
                      <InputRightElement width="3.5rem">
                        <Button
                          size="md"
                          onClick={handleClick}
                          fontSize={"2rem"}
                          backgroundColor={"transparent"}
                          textColor={"white"}
                          roundedRight={"md"}
                          _hover={{
                            textColor: "gray.300",
                          }}
                        >
                          {show ? (
                            <PiEyeBold fontSize={"2rem"} />
                          ) : (
                            <PiEyeClosedBold fontSize={"2rem"} />
                          )}
                        </Button>
                      </InputRightElement>
                    </InputGroup>

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

                    <Button
                      mt={"2rem"}
                      backgroundColor={"ngDarkblue"}
                      textColor={"white"}
                      _hover={{
                        backgroundColor: "ngDarkblue",
                        textColor: "gray.300",
                      }}
                      size="lg"
                    >
                      Create Account
                    </Button>
                  </Stack>
                </FormControl>
              </Box>
              <Box
                backgroundImage="url('/img/nigeria-flag.gif')"
                backgroundRepeat="no-repeat"
                backgroundSize={"100%"}
                pt={"1rem"}
                display={{ base: "none", md: "block" }}
                ms={"-5px"}
                zIndex={-1}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
