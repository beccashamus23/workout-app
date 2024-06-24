import React from "react";
import { Text, Flex, Input } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

const Workouts: React.FC = () => {
  const search = (e: string) => {};
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
        <FaYoutube size={56} />
        <Input
          placeholder="search videos..."
          onChange={(e) => search(e.target.value)}
        />
      </Flex>
    </Flex>
  );
};

export default Workouts;
