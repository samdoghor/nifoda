import { Box, Text, chakra } from "@chakra-ui/react";

type Props = {
  pagetitle: string;
};

const Header: React.FC<Props> = ({ pagetitle }) => {
  return (
    <>
      <Box
        bgColor={"ngDarkblue"}
        paddingX={"20px"}
        boxShadow={
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
        }
        height={"15%"}
        py={"10px"}
      >
        <chakra.div
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text color={"white"} fontSize={"30px"} fontWeight={800}>
            {pagetitle}
          </Text>
        </chakra.div>
      </Box>
    </>
  );
};

export default Header;
