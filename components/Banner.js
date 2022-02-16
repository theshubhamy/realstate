import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} width={500} height={300} alt="banner" />
        <Box p="5">
          <Text color="gray.700" fontSize="sm" fontWeight="medium">
            {purpose}
          </Text>
          <Text fontSize="3xl" fontWeight="bold">
            {title1} <br /> {title2}
          </Text>
          <Text
            color="gray.700"
            fontSize="lg"
            paddingTop="5"
            paddingBottom="5"
            fontWeight="bold">
            {desc1}
            <br /> {desc2}
          </Text>
          <Button fontSize="xl" bg="purple.400" color="white">
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Banner;
