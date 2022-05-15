import React from "react";
import { NextPage } from "next";

import { Container, Flex } from "@chakra-ui/react";
import Cart from "@components/sections/cart";
import Details from "@components/sections/details";

const Home: NextPage = () => {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex
        height={{ base: "auto", md: "100vh" }}
        py={{ base: 0, sm: 5, md: 10 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export default Home;
