import { Flex, Link, Text, Avatar, Box } from "@chakra-ui/react";
import exampleProfilepic from "../../../public/postExample.png";
const PostHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      my={2}
      w={"full"}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar
          src={exampleProfilepic}
          borderRadius="full"
          boxSize="50px"
        ></Avatar>
        <Flex>
          <Link color={"gray.200"}>username</Link>
          <Box color={"gray.200"} pl={3}>
            1w
          </Box>
        </Flex>
      </Flex>
      <Box>
        <Text
          color={"gray.200"}
          _hover={{ color: "blue.500" }}
          transition={"0.2s ease-in-out"}
        >
          unfollow
        </Text>
      </Box>
    </Flex>
  );
};
export default PostHeader;
