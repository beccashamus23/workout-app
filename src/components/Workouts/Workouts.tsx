import React from "react";
import { Text, Flex, Input } from "@chakra-ui/react";
//import { FaYoutube } from "react-icons/fa";
import Videos from "./Videos";
import Assistant from "./Assistant";

const Workouts: React.FC = () => {
  return (
    <Flex
      alignItems={"center"}
      direction={"column"}
      w={"full"}
      h={"auto"}
      color={"gray.200"}
    >
      <Text fontSize={"32px"} fontStyle={"italic"}>
        WORKOUTS
      </Text>
      <Flex gap={3} alignItems={"center"}>
        <Videos />
      </Flex>
      <Assistant />
    </Flex>
  );
};

export default Workouts;
