import React from "react";
import { Flex, Text, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Grid, GridItem } from "@chakra-ui/react";

const Explore = () => {
  return (
    <Flex
      alignItems={"center"}
      direction={"column"}
      w={"full"}
      h={"auto"}
      color={"gray.200"}
    >
      <Text fontSize={"32px"} fontStyle={"italic"}>
        EXPLORE
      </Text>
      <Flex gap={3} alignItems={"center"} mb={5}>
        <FaSearch size="32" />
        <Input placeholder="Search..."></Input>
      </Flex>
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={6}
        w="full"
      >
        <GridItem w="100%" h="48" bg="blue.500"></GridItem>
        <GridItem w="100%" h="48" bg="blue.500" />
        <GridItem w="100%" h="48" bg="blue.500" />
        <GridItem w="100%" h="48" bg="blue.500" />
        <GridItem w="100%" h="48" bg="blue.500" />
        <GridItem w="100%" h="48" bg="blue.500" />
      </Grid>
    </Flex>
  );
};

export default Explore;
