import { Box } from "@chakra-ui/react";
import Header from "../../components/Header";
import Navigaton from "../../components/Navigation";

const Category = () => {
  return (
    <>
      <Box>
        <Navigaton />
        <Header pagetitle={"Categories"} />
        <Box bgColor={"ngPWhiteoff"} minHeight={"100vh"} py={"20px"}>
          <Box
            marginLeft={"100px"}
            paddingX={{ base: "20px", md: "50px" }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default Category;
