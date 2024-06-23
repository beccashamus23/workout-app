import React from "react";
import Videos from "./Videos";
import { Text, Flex } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

const Workouts: React.FC = () => {
  return (
    <Flex alignItems={"center"} direction={"column"} w={"full"} h={"auto"}>
      <Text fontSize={"32px"} fontStyle={"italic"}>
        WORKOUTS
      </Text>
      <FaYoutube />
      <Videos />
    </Flex>
  );
};

export default Workouts;
