import {
  Box,
  Flex,
  VStack,
  Link,
  Text,
  Image,
  Tooltip,
  // Icon,
  // IconButton,
  // Center,
  // Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import {
  TbLayoutSidebarRightExpandFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";
import { motion } from "framer-motion";
import { FaBell, FaUsers } from "react-icons/fa6";
import { GiPodiumWinner } from "react-icons/gi";
import { SiMinutemailer } from "react-icons/si";
import { RiAccountPinCircleFill, RiLogoutBoxRFill } from "react-icons/ri";

const Navigaton = () => {
  const [open, setOpen] = useState(false);
  const sidebarVariants = {
    open: { width: 180 },
    closed: { width: 52 },
  };
  const iconVariants = {
    open: { rotate: 360 },
    closed: { rotate: 0 },
  };
  return (
    <>
      <Box
        as={motion.div}
        bgColor={"ngDarkblue"}
        minHeight={"100vh"}
        position={"fixed"}
        width={"52px"}
        left={0}
        top={0}
        animate={open ? "open" : "closed"}
        variants={sidebarVariants}
        // transition={{ duration: 0.3 }}
        transition="0.3s linear"
        overflow={"hidden"}
        zIndex={999}
        boxShadow={
          "0 4px 6px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(255, 255, 255, 0.08)"
        }
      >
        <Flex p="4" justify={"start"}>
          <VStack justify={"start"} alignItems={"start"}>
            <Link title="Menu">
              <Flex justify={"start"} alignItems={"center"}>
                <Box
                  as={motion.div}
                  animate={open ? "open" : "closed"}
                  variants={iconVariants}
                  transition="0.3s linear"
                >
                  {open ? (
                    <TbLayoutSidebarRightExpandFilled
                      color={"white"}
                      fontWeight={900}
                      fontSize={"25px"}
                      onClick={() => setOpen(!open)}
                    />
                  ) : (
                    <TbLayoutSidebarLeftExpandFilled
                      color={"white"}
                      fontWeight={900}
                      fontSize={"25px"}
                      onClick={() => setOpen(!open)}
                    />
                  )}
                </Box>
                <Text color={"white"} paddingLeft={"20px"} fontWeight={700}>
                  Menu
                </Text>
              </Flex>
            </Link>
            <Link href="/dashboard" title="Dashboard">
              <Flex justify={"start"} alignItems={"center"}>
                <Box>
                  <Image
                    src="src/assets/img/nigeria_flag.jpg"
                    alt="Nigeria Flag & Coat of Arms"
                    borderRadius="full"
                    boxSize="25px"
                    objectFit="cover"
                    mx={"auto"}
                    my={"auto"}
                    fallbackSrc="https://via.placeholder.com/150"
                  />
                </Box>
                <Text color={"white"} paddingLeft={"20px"} fontWeight={700}>
                  NIFODA
                </Text>
              </Flex>
            </Link>

            <Box mt={"20px"}>
              <Tooltip label={"Dashboard"} bg={"white"} color={"ngDarkgreen"}>
                <Box py={"15px"}>
                  <Link href="/dashboard">
                    <Flex justify={"start"} alignItems={"center"}>
                      <Box>
                        <MdSpaceDashboard
                          color={"white"}
                          fontWeight={400}
                          fontSize={"20px"}
                        />
                      </Box>
                      <Text
                        color={"white"}
                        paddingLeft={"20px"}
                        fontWeight={400}
                        fontSize={"15px"}
                      >
                        Dashboard
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              </Tooltip>

              <Tooltip
                label={"Contributors"}
                bg={"white"}
                color={"ngDarkgreen"}
              >
                <Box py={"15px"}>
                  <Link href="#">
                    <Flex justify={"start"} alignItems={"center"}>
                      <Box>
                        <GiPodiumWinner
                          color={"white"}
                          fontWeight={400}
                          fontSize={"20px"}
                        />
                      </Box>
                      <Text
                        color={"white"}
                        paddingLeft={"20px"}
                        fontWeight={400}
                        fontSize={"15px"}
                      >
                        Contributors
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              </Tooltip>

              <Tooltip
                label={"Notifications"}
                bg={"white"}
                color={"ngDarkgreen"}
              >
                <Box py={"15px"}>
                  <Link href="#">
                    <Flex justify={"start"} alignItems={"center"}>
                      <Box>
                        <FaBell
                          color={"white"}
                          fontWeight={400}
                          fontSize={"20px"}
                        />
                      </Box>
                      <Text
                        color={"white"}
                        paddingLeft={"20px"}
                        fontWeight={400}
                        fontSize={"15px"}
                      >
                        Notifications
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              </Tooltip>

              <Tooltip
                label={"Issues/Features"}
                bg={"white"}
                color={"ngDarkgreen"}
              >
                <Box py={"15px"}>
                  <Link href="#">
                    <Flex justify={"start"} alignItems={"center"}>
                      <Box>
                        <SiMinutemailer
                          color={"white"}
                          fontWeight={400}
                          fontSize={"20px"}
                        />
                      </Box>
                      <Text
                        color={"white"}
                        paddingLeft={"20px"}
                        fontWeight={400}
                        fontSize={"15px"}
                      >
                        Issues/Features
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              </Tooltip>

              <Tooltip label={"Users"} bg={"white"} color={"ngDarkgreen"}>
                <Box py={"15px"}>
                  <Link href="#">
                    <Flex justify={"start"} alignItems={"center"}>
                      <Box>
                        <FaUsers
                          color={"white"}
                          fontWeight={400}
                          fontSize={"20px"}
                        />
                      </Box>
                      <Text
                        color={"white"}
                        paddingLeft={"20px"}
                        fontWeight={400}
                        fontSize={"15px"}
                      >
                        Users
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              </Tooltip>

              <Tooltip label={"Account"} bg={"white"} color={"ngDarkgreen"}>
                <Box py={"15px"}>
                  <Link href="#" title="">
                    <Flex justify={"start"} alignItems={"center"}>
                      <Box>
                        <RiAccountPinCircleFill
                          color={"white"}
                          fontWeight={400}
                          fontSize={"20px"}
                        />
                      </Box>
                      <Text
                        color={"white"}
                        paddingLeft={"20px"}
                        fontWeight={400}
                        fontSize={"15px"}
                      >
                        Account
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              </Tooltip>

              <Tooltip label={"Logout"} bg={"white"} color={"ngDarkgreen"}>
                <Box py={"15px"}>
                  <Link href="#" title="">
                    <Flex justify={"start"} alignItems={"center"}>
                      <Box>
                        <RiLogoutBoxRFill
                          color={"white"}
                          fontWeight={400}
                          fontSize={"20px"}
                        />
                      </Box>
                      <Text
                        color={"white"}
                        paddingLeft={"20px"}
                        fontWeight={400}
                        fontSize={"15px"}
                      >
                        Logout
                      </Text>
                    </Flex>
                  </Link>
                </Box>
              </Tooltip>
            </Box>

            {/* <Link href="/dashboard">
              <Flex justify={"start"} alignItems={"center"}>
                <Box>
                  <Image
                    src="src/assets/img/nigeria_flag.jpg"
                    alt="Nigeria Flag & Coat of Arms"
                    borderRadius="full"
                    boxSize="35px"
                    objectFit="cover"
                    mx={"auto"}
                    my={"auto"}
                    fallbackSrc="https://via.placeholder.com/150"
                  />
                </Box>
                <Text
                  color={"white"}
                  paddingLeft={"10px"}
                  fontWeight={900}
                  pb={"10px"}
                >
                  NIFODA
                </Text>
              </Flex>
            </Link> */}
            {/* <Center width="100%" mt={"20px"}>
              <Divider orientation="horizontal" />
            </Center>
            <Link marginY={"5px"} href="/dashboard">
              <IconButton
                aria-label="Dashboard"
                icon={<Icon as={MdSpaceDashboard} />}
                variant="ghost"
                color={"white"}
                fontSize={"20px"}
                _hover={{
                  color: "gray.400",
                  bgColor: "none",
                }}
              />
              Dashboard
            </Link> */}
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navigaton;
