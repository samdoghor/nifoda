import { Box, Text, Button, Link } from "@chakra-ui/react";

const GetAPI = () => {
  return (
    <>
      <Box maxW="100vw" mx="auto" bg="white">
        <Box px={{ base: "1rem", lg: "8rem" }} py={"4rem"} overflow={"hidden"}>
          <Text
            textAlign={"center"}
            fontFamily={"overpass"}
            fontWeight={500}
            fontSize={"1.4rem"}
            pb={"3rem"}
            overflow={"hidden"}
          >
            Get Into Action, Start Building Today
          </Text>
          <Box
            mx={"auto"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow={"hidden"}
          >
            <Link href="/signup" overflow={"hidden"}>
              <Button
                bg="ngDarkblue"
                color={"white"}
                p={"1.5rem"}
                transition={".7s"}
                _hover={{
                  bg: "ngGreenvid",
                  color: "ngOffwhite",
                  transform: "scale(0.9)",
                  transition: ".4s",
                }}
                fontWeight="semibold"
                overflow={"hidden"}
              >
                Get an API Key
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GetAPI;
