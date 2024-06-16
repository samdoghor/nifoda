import { Box, Image, Text, chakra } from "@chakra-ui/react";
import { MdOutlineTipsAndUpdates, MdStorage } from "react-icons/md";
import FeaturesCard from "../components/FeaturesCard";
import GetAPI from "../components/GetAPI";
import { useEffect } from "react";
import { motion } from "framer-motion";
import APIExample from "../components/APIExample";

const imgVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    rotate: 360,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};

const textVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2,
    },
  },
};

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

const Home = () => {
  useEffect(() => {
    document.title = "Home | NIFODA";
  }, []);

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
              <Image
                viewport={{ once: true }}
                as={motion.img}
                src="src/assets/img/nigeria_flag.jpg"
                alt="Nigeria Flag & Coat of Arms"
                borderRadius="full"
                boxSize="100px"
                objectFit="cover"
                mx={"auto"}
                fallbackSrc="https://via.placeholder.com/150"
                variants={imgVariant}
                initial="initial"
                whileInView="animate"
              />
              <Text
                viewport={{ once: true }}
                as={motion.p}
                fontSize={{ base: "2.5rem", lg: "3.7rem" }}
                overflow={"hidden"}
                fontWeight={"900"}
                lineHeight={"1.5"}
                pt={"2.5rem"}
                px={{ md: "4rem" }}
                color={"ngDarkblue"}
                fontFamily={"archivoBlack"}
                variants={textVariant}
                initial="initial"
                whileInView="animate"
              >
                <chakra.span color={"gray.600"} fontSize={"2rem"} pr={"1rem"}>
                  <chakra.sub>#1</chakra.sub>
                </chakra.span>
                <chakra.span></chakra.span>The
                <chakra.span className="" color={"green.800"} px={"2rem"}>
                  Nigeria
                </chakra.span>
                Food Database API (NIFODA)
              </Text>
              <Text
                viewport={{ once: true }}
                as={motion.p}
                fontSize={"1.25rem"}
                fontFamily={"albertSans"}
                lineHeight={"1.625"}
                color={"gray.700"}
                pt={"2.5rem"}
                px={{ lg: "6rem" }}
                fontWeight={"600"}
                variants={textVariant2}
                initial="initial"
                whileInView="animate"
              >
                Explore a rich collection of Nigerian recipes, ingredients,
                <br />
                and culinary traditions with our comprehensive <br />
                Nigeria Food Database API (NIFODA).
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Section Two */}
        <FeaturesCard />

        {/* Section Three */}
        <Box w={"100%"} minH={"100vh"} bg="white" id="example">
          <Box px={{ base: "1rem", lg: "8rem" }} py={"8rem"}>
            <Text
              viewport={{ once: true }}
              as={motion.p}
              fontSize={"2.8rem"}
              color={"ngDarkblue"}
              fontWeight={"900"}
              fontFamily={"overpass"}
              display={"flex"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              justifyContent={"center"}
            >
              <chakra.span pr={"1rem"} fontSize={"3rem"}>
                <MdOutlineTipsAndUpdates />
              </chakra.span>
              Give it a whirl
            </Text>
            <Text
              viewport={{ once: true }}
              as={motion.p}
              fontSize={"1.2rem"}
              fontFamily={"albertSans"}
              color={"ngDarkblue"}
              py={"1.1rem"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              textAlign={"center"}
            >
              With each API key, you will get x requests per day.
            </Text>
            <APIExample />
          </Box>
        </Box>

        {/* Section Four */}
        <Box
          w={"100%"}
          minH={"100vh"}
          // bgGradient={"linear(to-r, green.900, green.800,  green.900)"}
          bg={"ngDarkblue"}
          id="tryitout"
        >
          <Box px={{ base: "1rem", lg: "8rem" }} py={"8rem"}>
            <Text
              viewport={{ once: true }}
              as={motion.p}
              fontSize={"2.8rem"}
              color={"ngGreenlight"}
              fontWeight={"900"}
              fontFamily={"overpass"}
              display={"flex"}
              justifyContent={"center"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
            >
              <chakra.span pr={"1rem"} fontSize={"3rem"}>
                <MdStorage />
              </chakra.span>
              Insight Briefing
            </Text>

            <Box
              viewport={{ once: true }}
              as={motion.div}
              color={"ngOffwhite"}
              textAlign={"center"}
              fontSize={"1.1rem"}
              pt={"1rem"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
            >
              <Text
                lineHeight={"1.8rem"}
                letterSpacing={".08rem"}
                fontFamily={"albertSans"}
              >
                Explore Nigerian Cuisine! Detailed dish info, powered by
                volunteers.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Get API Key */}
        <GetAPI />
      </Box>
    </>
  );
};

export default Home;
