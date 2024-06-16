import { Box, Text } from "@chakra-ui/react";

const APIExample = () => {
  return (
    <>
      <Box w={"100%"} minH={"100vh"}>
        <Box py={"1.2rem"}>
          <Box>
            <Box
              display={"grid"}
              gridGap={"5rem"}
              overflow={"hidden"}
              gridTemplateColumns={{
                md: "repeat(2, 1fr)",
              }}
            >
              <Box>
                <Text> Box 1 </Text>
              </Box>
              <Box>
                <Text
                  fontSize={"1.5rem"}
                  fontWeight={700}
                  py={"10px"}
                  px={"2px"}
                >
                  Response
                </Text>
                <Box bg={"ngDarkerblue"} h={"90vh"} rounded={"2xl"}>
                  <Box p={"2rem"}>
                    <Text color={"#4284f5"}> [ ] </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default APIExample;
