import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          position={"absolute"}
          bottom={0}
          p={"1rem"}
          mx={"auto"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Text align={"center"}>
            All right reserved © NIFODA {currentYear}
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
