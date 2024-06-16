import { Box, Text, Link, chakra, Image } from "@chakra-ui/react";
import { Footerlinks } from "../constants/footer";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

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

const Footer = () => {
  // const currentYear = new Date().getFullYear();

  return (
    <>
      <Box maxW="100vw" mx="auto" bg="gray.100" pb={{ lg: "1rem" }}>
        {/* Section One */}
        <Box
          px={{ base: "1rem", lg: "8rem" }}
          pt={"4rem"}
          display={"flex"}
          alignItems="center"
          justifyContent={{ base: "left", md: "center" }}
        >
          <Box
            viewport={{ once: true }}
            as={motion.div}
            display={"grid"}
            gridGap={{ base: "10", lg: "40" }}
            gridTemplateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            variants={textVariant}
            initial="initial"
            whileInView="animate"
          >
            <Box>
              <Text
                fontSize={"1.2rem"}
                fontWeight={700}
                pb={"1.2rem"}
                color={"ngDarkblue"}
              >
                About Project
              </Text>
              <Text fontSize={"1rem"} pb={".8rem"}>
                <chakra.p pb={".6rem"} fontFamily={"heebo"}>
                  <Text>
                    The Nigerian Food Database API (NIFODA) is the brainchild of
                    Samuel Doghor Destiny, a passionate advocate for advancing
                    the field of food science and technology in Nigeria
                  </Text>
                </chakra.p>
              </Text>
            </Box>
            {Footerlinks.map((section) => (
              <Box key={section.id}>
                <Text
                  fontSize={"1.2rem"}
                  fontWeight={700}
                  pb={"1.2rem"}
                  color={"ngDarkblue"}
                >
                  {section.title}
                </Text>
                <Text fontSize={"1rem"} pb={".8rem"}>
                  {section.link.map((link, index) => (
                    <chakra.p
                      key={index}
                      pb={".6rem"}
                      fontFamily={"heebo"}
                      transition={".2s"}
                      _hover={{
                        transform: "scale(0.97)",
                        transition: ".2s",
                      }}
                    >
                      <Link href={link.url} isExternal={link.external === true}>
                        {link.label}
                      </Link>
                    </chakra.p>
                  ))}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Section Two */}
        <Box display={"absolute"} bottom={0} pt={"2rem"}>
          <Box
            px={{ base: "1rem", lg: "8rem" }}
            display={"flex"}
            alignItems="center"
            justifyContent="center"
          >
            <Image
              viewport={{ once: true }}
              as={motion.img}
              src="src/assets/img/nigeria_flag.jpg"
              alt="Nigeria Flag & Coat of Arms"
              borderRadius="full"
              boxSize={{ base: "35px", lg: "40px" }}
              objectFit="cover"
              fallbackSrc="https://via.placeholder.com/150"
              variants={imgVariant}
              initial="initial"
              whileInView="animate"
            />
            <Text
              color={"ngDarkblue"}
              pl={"1.5rem"}
              fontWeight={500}
              viewport={{ once: true }}
              as={motion.p}
              variants={textVariant}
              initial="initial"
              whileInView="animate"
            >
              Proudly developed by
              <Link
                href="https://www.samdoghor.com"
                pl={".4rem"}
                fontWeight={900}
                color={"ngDarkblue"}
                isExternal
              >
                Samuel, Doghor Destiny <ExternalLinkIcon mx="2px" />
              </Link>
            </Text>
          </Box>
        </Box>

        {/* <Box
          px={{ base: "1rem", lg: "8rem" }}
          display={"flex"}
          pb={{ lg: "2rem" }}
          alignItems="center"
          justifyContent="center"
        >
          <Text>All right reserved © Samuel Doghor {currentYear}</Text>
        </Box> */}
      </Box>
    </>
  );
};

export default Footer;
