import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy | NIFODA";
  }, []);

  return (
    <>
      <Box></Box>
    </>
  );
};

export default Privacy;
