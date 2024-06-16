import { Box, Text, Tooltip, chakra } from "@chakra-ui/react";
import { MdFingerprint } from "react-icons/md";
import { features } from "../constants/features";
import { motion } from "framer-motion";

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
    y: 40,
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

const FeaturesCard = () => {
  return (
    <>
      <Box
        w={"100%"}
        minH={"100vh"}
        // bgGradient={"linear(to-r, green.900, green.800,  green.900)"}
        bg={"ngDarkblue"}
        id="features"
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
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            justifyContent={"Center"}
          >
            <chakra.span pr={"1rem"} fontSize={"3rem"}>
              <MdFingerprint />
            </chakra.span>
            Nigeria Cuisine Focus
          </Text>
          <Box
            color={"ngOffwhite"}
            textAlign={"center"}
            fontSize={"1.1rem"}
            pt={"1rem"}
          >
            <Text
              viewport={{ once: true }}
              as={motion.p}
              lineHeight={"1.8rem"}
              letterSpacing={".08rem"}
              fontFamily={"albertSans"}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
            >
              Unlock Nigerian culinary creativity with the NIFODA API.
            </Text>
          </Box>

          <Box pt={"6rem"}>
            <Box
              display={"grid"}
              gridGap={{ base: "2rem", md: "5rem" }}
              overflow={"hidden"}
              gridTemplateColumns={{
                lg: "repeat(3, 1fr)",
                md: "repeat(2, 1fr)",
              }}
            >
              {features.map((features, index) => (
                <Tooltip
                  label={features.tooltip}
                  bg={"white"}
                  color={"ngDarkgreen"}
                >
                  <Box
                    viewport={{ once: true }}
                    as={motion.div}
                    backgroundColor={"ngDarkerblue"}
                    p={"1.8rem"}
                    rounded={"1rem"}
                    boxShadow="2xl"
                    key={index}
                    overflow={"hidden"}
                    variants={textVariant2}
                    initial="initial"
                    whileInView="animate"
                    _hover={{ cursor: "pointer" }}
                  >
                    <Text
                      color={"ngGreenlight"}
                      fontSize={"1.2rem"}
                      pb={"1rem"}
                      fontFamily={"heebo"}
                      letterSpacing={".2rem"}
                      fontWeight={700}
                    >
                      {features.title}
                    </Text>
                    <Text
                      color={"white"}
                      fontFamily={"albertSans"}
                      letterSpacing={".1rem"}
                      fontSize={".9rem"}
                    >
                      {features.details}
                    </Text>
                  </Box>
                </Tooltip>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FeaturesCard;
