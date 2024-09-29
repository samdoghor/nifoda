import { Box, Button, Flex, FormControl, Input, InputGroup, InputRightElement, Text, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const textVariant2 = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 1,
        },
    },
};

const Api = () => {
    useEffect(() => {
        document.title = "API-Key | NIFODA";
    }, []);

    const location = useLocation();
    const apiKey = location.state?.apiKey || 'No API key available';
    const secretKey = location.state?.secretKey || 'No Secret key available';

    const toast = useToast();

    const handleApiKeyCopyClick = () => {
        navigator.clipboard.writeText(apiKey).then(() => {
            toast({
                title: "API Key Copied",
                description: "The API key has been copied to your clipboard.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }).catch(() => {
            toast({
                title: "Copy Failed",
                description: "Failed to copy API key. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        });
    };

    const handleSecretKeyCopyClick = () => {
        navigator.clipboard.writeText(secretKey).then(() => {
            toast({
                title: "Secret Key Copied",
                description: "The Secret key has been copied to your clipboard.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }).catch(() => {
            toast({
                title: "Copy Failed",
                description: "Failed to copy Secret key. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        });
    };

    return (
        <>
            <Box>
                {/* Section One */}
                <Box maxW="100vw" minH="100vh" mx="auto" bg="white">

                    <Box p={{ base: "1rem", lg: "2.5rem" }} mt={"4rem"}>

                        <Box
                            py={"3rem"}
                            px={{ base: "0.8rem", lg: "8rem" }}
                            textAlign={"center"}
                        >
                            <Text
                                viewport={{ once: true }}
                                as={motion.p}
                                fontSize={"2rem"}
                                fontFamily={"albertSans"}
                                lineHeight={"1.625"}
                                color={"gray.700"}
                                pt={"2.5rem"}
                                px={{ lg: "6rem" }}
                                fontWeight={"900"}
                            >
                                Secure Your Auth Keys 🔐
                            </Text>
                            <Text
                                viewport={{ once: true }}
                                as={motion.p}
                                fontSize={"1.25rem"}
                                fontFamily={"albertSans"}
                                lineHeight={"1.625"}
                                color={"gray.700"}
                                pt={"1.5rem"}
                                px={{ lg: "6rem" }}
                                fontWeight={"600"}
                                variants={textVariant2}
                                initial="initial"
                                whileInView="animate"
                            >
                                Your API and Secret key is unique and cannot be recovered or regenerated for now.<br />
                                Please make sure to store them securely, do not share with anyone.<br />
                            </Text>
                        </Box>
                        <Flex align="center" justify="center">
                            <Box
                                pb={"3rem"}
                                px={{ base: "0.8rem", lg: "8rem" }}
                                textAlign={"center"}
                                width="2xl"
                            >
                                <Text fontWeight={900} mb={2}> API Key: </Text>

                                <FormControl label="api-key">
                                    <InputGroup size="md">
                                        <Input
                                            pr="4.5rem"
                                            type="text"
                                            id="api-key"
                                            value={apiKey}
                                            isReadOnly
                                        />
                                        <InputRightElement width="3.5rem">
                                            <Button
                                                size="md"
                                                onClick={handleApiKeyCopyClick}
                                                fontSize={"1rem"}
                                                backgroundColor={"transparent"}
                                                textColor={"black"}
                                                roundedRight={"md"}
                                                _hover={{
                                                    textColor: "gray.300",
                                                }}
                                            >
                                                <FaCopy fontSize={"1rem"} />
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            </Box>
                        </Flex>
                        <Flex align="center" justify="center">
                            <Box
                                pb={"3rem"}
                                px={{ base: "0.8rem", lg: "8rem" }}
                                textAlign={"center"}
                                width="2xl"
                            >
                                <Text fontWeight={900} mb={2}> Secret Key: </Text>

                                <FormControl label="api-key">
                                    <InputGroup size="md">
                                        <Input
                                            pr="4.5rem"
                                            type="password"
                                            id="api-key"
                                            value={secretKey}
                                            isReadOnly
                                        />
                                        <InputRightElement width="3.5rem">
                                            <Button
                                                size="md"
                                                onClick={handleSecretKeyCopyClick}
                                                fontSize={"1rem"}
                                                backgroundColor={"transparent"}
                                                textColor={"black"}
                                                roundedRight={"md"}
                                                _hover={{
                                                    textColor: "gray.300",
                                                }}
                                            >
                                                <FaCopy fontSize={"1rem"} />
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box >
        </>
    );
};

export default Api;
