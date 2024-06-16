import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { AboutContent } from "../constants/about";
import GetAPI from "../components/GetAPI";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const About = () => {
  useEffect(() => {
    document.title = "About | NIFODA";
  }, []);

  return (
    <>
      <Box>
        <Box w={"100%"} minH={"100vh"} bg="white">
          <Box px={{ base: "1rem", lg: "8rem" }} py={"4rem"}>
            <Box>
              <Text
                fontSize={"2.4rem"}
                color={"ngDarkblue"}
                fontWeight={"900"}
                fontFamily={"overpass"}
                display={"flex"}
                mt={"4rem"}
              >
                About
              </Text>
              {AboutContent.map((about, index) => (
                <>
                  <Text
                    key={index}
                    fontFamily={"albertSans"}
                    letterSpacing={".1rem"}
                    fontSize={"16px"}
                    fontWeight={"500"}
                    lineHeight={"2rem"}
                  >
                    <Text py={"1rem"}>{about.p1}</Text>
                    <Text py={"1rem"}>{about.p2}</Text>
                    <Text py={"1rem"}>{about.p3}</Text>
                    <Text py={"1rem"} fontWeight={900}>
                      NIFODA boasts several key features and benefits:
                    </Text>
                    <Text pb={"1rem"}>
                      <UnorderedList>
                        <ListItem pb={"1rem"}>
                          <Text fontWeight={900}>
                            Comprehensive Ingredient Database:
                          </Text>
                          NIFODA offers an extensive collection of ingredients
                          commonly used in Nigerian cuisine, including
                          vegetables, meats, spices, grains, and more. Each
                          ingredient entry is rich in detail, providing
                          developers with essential information such as names,
                          descriptions, nutritional composition, and potential
                          health benefits.
                        </ListItem>
                        <ListItem py={"1rem"}>
                          <Text fontWeight={900}>
                            Detailed Nutritional Information:
                          </Text>
                          The API provides comprehensive nutritional information
                          for a wide range of Nigerian dishes, including
                          macronutrient and micronutrient breakdowns. This
                          feature is particularly valuable for developers
                          creating fitness, health, or nutrition applications,
                          as it enables them to calculate and monitor the
                          nutritional value of meals based on the ingredients
                          used.
                        </ListItem>
                        <ListItem py={"1rem"}>
                          <Text fontWeight={900}>Empowering Developers:</Text>
                          NIFODA empowers developers to create innovative
                          applications that cater to the unique needs of
                          Nigerian consumers. Whether it's promoting healthier
                          eating habits, assisting with meal planning, or
                          facilitating cultural exploration through food, NIFODA
                          serves as a valuable resource for developers looking
                          to make a positive impact in the realm of nutrition
                          and culinary education.
                        </ListItem>
                      </UnorderedList>
                      <Text py={"1rem"}>
                        Through his dedication and expertise, Samuel Doghor
                        Destiny is leading the charge in building a brighter
                        future for Nigerian food culture—one API call at a time.
                        His commitment to excellence and his vision for NIFODA
                        exemplify the potential of technology to drive positive
                        change in the realm of food science and beyond.
                      </Text>
                    </Text>
                  </Text>
                </>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Get API Key */}
        <GetAPI />
      </Box>
    </>
  );
};

export default About;
