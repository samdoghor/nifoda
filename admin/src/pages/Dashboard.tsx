import {
  Box,
  Grid,
  GridItem,
  Text,
  Divider,
  Link,
  Flex,
} from "@chakra-ui/react";
import Navigaton from "../components/Navigation";
import Header from "../components/Header";
import { MdAddCircle } from "react-icons/md";
import Footer from "../components/Footer";

const Dashboard = () => {
  const data = [
    {
      title: "Food Groups",
      description:
        "Food groups are the basic categories into which foods are divided according to their key nutrients and dietary benefits. The major food groups are fruits, vegetables, grains, protein sources, and dairy products.",
      quantity: 10,
    },
    {
      title: "Food Categories",
      description:
        "Food categories are the classifications used to group foods based on their nutritional composition and characteristics. The major food categories include fruits, vegetables, grains, protein foods, dairy, and oils/fats.",
      quantity: 6,
    },
    {
      title: "Food Items",
      description:
        "Fruits and veggies like apples, oranges, broccoli, and spinach provide vital nutrients and fiber. Grains including bread and rice along with proteins such as chicken, eggs, and beans supply energy, protein, and other nutrients. Dairy foods like milk and yogurt as well as oils and nuts like olive oil are also important components of a balanced diet.",
      quantity: 576,
    },
    {
      title: "Food Groups",
      description:
        "Food groups are the basic categories into which foods are divided according to their key nutrients and dietary benefits. The major food groups are fruits, vegetables, grains, protein sources, and dairy products.",
      quantity: 10,
    },
    {
      title: "Food Categories",
      description:
        "Food categories are the classifications used to group foods based on their nutritional composition and characteristics. The major food categories include fruits, vegetables, grains, protein foods, dairy, and oils/fats.",
      quantity: 6,
    },
    {
      title: "Food Items",
      description:
        "Fruits and veggies like apples, oranges, broccoli, and spinach provide vital nutrients and fiber. Grains including bread and rice along with proteins such as chicken, eggs, and beans supply energy, protein, and other nutrients. Dairy foods like milk and yogurt as well as oils and nuts like olive oil are also important components of a balanced diet.",
      quantity: 576,
    },
  ];
  return (
    <>
      <Box>
        <Navigaton />
        <Header pagetitle={"NIFODA Dashboard"} />
        <Box bgColor={"ngPWhiteoff"} minHeight={"100vh"} py={"20px"}>
          <Box paddingX={{ base: "20px", md: "50px" }}>
            <Grid
              templateColumns={{ md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              gap={10}
            >
              {data.map((item, index) => (
                <Link
                  href="#"
                  key={index}
                  w="100%"
                  h={"100%"}
                  rounded={"10px"}
                  borderWidth={1}
                  borderColor={"gray.200"}
                  boxShadow={"md"}
                  _hover={{
                    textDecoration: "none",
                    boxShadow: "lg",
                    bg: "ngHoverCard",
                  }}
                >
                  <GridItem>
                    <Box p={"20px"}>
                      <Text fontWeight={900} fontSize={"25px"}>
                        {item.title}
                      </Text>
                      <Divider my={"20px"} />
                      <Text fontSize={"12px"} h={"100%"}>
                        {item.description}
                      </Text>
                      <Box bottom={0}>
                        <Divider my={"20px"} />
                        <Grid templateColumns="repeat(2, 1fr)">
                          <GridItem>
                            <Text fontSize={"12px"}>
                              There are {item.quantity} {item.title}
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Link
                              href="#"
                              fontSize={"12px"}
                              _hover={{ textDecoration: "underline" }}
                            >
                              <Flex
                                justifyContent={"end"}
                                alignItems={"center"}
                              >
                                <Text pe={"4px"}> Add New </Text>
                                <MdAddCircle fontSize={"20px"} />
                              </Flex>
                            </Link>
                          </GridItem>
                        </Grid>
                      </Box>
                    </Box>
                  </GridItem>
                </Link>
              ))}
              {/* <GridItem w="100%" h="10" bg="white">
                <Box>1</Box>
              </GridItem>
              <GridItem w="100%" h="10" bg="white" />
              <GridItem w="100%" h="10" bg="white" /> */}
            </Grid>
            <Box py={"50px"}>
              <Divider />
              <Footer />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
