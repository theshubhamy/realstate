import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
//ui-component
import Banner from "../components/Banner";
const Home = () => {
  return (
    <Box>
      <h1>HomePage</h1>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments,Villas,Homes"
        desc2="and more"
        buttonText="Explore Renting"
        buttonLink="/search?purpose=for-rent"
        imageUrl="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"></Banner>
      <Banner
        purpose="BUY A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments,Villas,Homes"
        desc2="and more"
        buttonText="Explore Renting"
        buttonLink="/search?purpose=for-rent"
        imageUrl="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"></Banner>
    </Box>
  );
};
export default Home;
