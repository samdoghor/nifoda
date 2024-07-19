import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Router from "./collections/Router";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Box zIndex={1000}>
        <Navigation />
      </Box>
      <Router />
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default App;
