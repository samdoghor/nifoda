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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { PiEyeClosedBold, PiEyeBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up | NIFODA ";
  }, []);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    password: "",
    is_developer: "False",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRadioChange = (value: string) => {
    setFormData({ ...formData, is_developer: value });
  };

  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:4000/api-v1/editors', formData);
      if (response.data.code === 200) {
        toast({
          title: response.data.code_status,
          description: response.data.message,
          status: 'success',
          duration: 3000,
          isClosable: true,
          containerStyle: {
            bg: 'green.200'
          },
        })
        const apiKey = response.data.data.api_key;
        const secretKey = response.data.data.secret_key;
        navigate('/api-key', { state: { apiKey, secretKey } });
      } else if (response.data.code === 409) {
        toast({
          title: response.data.code_status,
          description: response.data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          containerStyle: {
            bg: 'red.200'
          },
        })
      } else {
        toast({
          title: "Error",
          description: "Unknown error has occurred. Please try again.",
          status: 'error',
          duration: 3000,
          isClosable: true,
          containerStyle: {
            bg: 'red.200'
          },
        })
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data;
        if (errorData.code === 409) {
          toast({
            title: errorData.code_status,
            description: errorData.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            containerStyle: {
              bg: 'red.200'
            },
          })
        } else {
          toast({
            title: "Error",
            description: "Unknown error has occurred. Please try again.",
            status: 'error',
            duration: 3000,
            isClosable: true,
            containerStyle: {
              bg: 'red.200'
            },
          })
        }
      } else {
        toast({
          title: "Error",
          description: "Unknown error has occurred. Please try again.",
          status: 'error',
          duration: 3000,
          isClosable: true,
          containerStyle: {
            bg: 'red.200'
          },
        })
      }
    } finally {
      setLoading(false);
    }
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
                <Box as={"form"} autoComplete={"True"} onSubmit={handleSubmit}>
                  <Stack
                    spacing={2}
                    pt={"2rem"}
                    overflow={"hidden"}
                    textColor={"white"}
                  >
                    <FormControl label="first_name" isRequired>
                      <FormLabel htmlFor="first_name" fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>First name</FormLabel>
                      <Input
                        placeholder="Enter First Name"
                        size="md"
                        type="text"
                        id="first_name"
                        onChange={handleChange}
                        value={formData.first_name}
                        autoComplete="on"
                        autoFocus={true}
                      />
                    </FormControl>

                    <FormControl label="last_name" isRequired>
                      <FormLabel htmlFor="last_name" fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>Last Name</FormLabel>
                      <Input
                        placeholder="Enter Last Name"
                        size="md"
                        type="text"
                        id="last_name"
                        onChange={handleChange}
                        value={formData.last_name}
                        autoComplete="on"
                      />
                    </FormControl>

                    <FormControl label="email_address" isRequired>
                      <FormLabel htmlFor="email_address" fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>Email address</FormLabel>
                      <Input
                        placeholder="Enter Email address"
                        size="md"
                        type="email"
                        id="email_address"
                        onChange={handleChange}
                        value={formData.email_address}
                        autoComplete="on"
                      />
                    </FormControl>

                    <FormControl label="password" isRequired>
                      <FormLabel htmlFor="password" fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>Password</FormLabel>
                      <InputGroup size="md">
                        <Input
                          pr="4.5rem"
                          type={show ? "text" : "password"}
                          placeholder="Enter Password"
                          id="password"
                          onChange={handleChange}
                          value={formData.password}
                          autoComplete="off"
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
                    </FormControl>

                    <FormControl label="is_developer" isRequired>
                      <FormLabel htmlFor="is_developer" fontWeight={600} fontSize={"1.2rem"} pt={"1.2rem"}>Are you a developer?</FormLabel>
                      <RadioGroup
                        defaultValue="False"
                        id="is_developer"
                        onChange={handleRadioChange}
                        value={formData.is_developer}
                      >
                        <Stack spacing={5} direction="row">
                          <Radio value="True" colorScheme="green">
                            Yes
                          </Radio>
                          <Radio value="False" colorScheme="green">
                            No
                          </Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>

                    <Button
                      mt={"2rem"}
                      backgroundColor={"ngDarkblue"}
                      textColor={"white"}
                      _hover={{
                        backgroundColor: "ngDarkblue",
                        textColor: "gray.300",
                      }}
                      size="lg"
                      type="submit"
                    >
                      {loading == false ? "Create Account" : "Processing..."}
                    </Button>
                  </Stack>
                </Box>
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
