import { Flex, Image, Link, Button } from "@chakra-ui/react";
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
        <Image
          src={exampleProfilepic}
          borderRadius="full"
          boxSize="50px"
        ></Image>
        <Link color={"white"}>username</Link>
      </Flex>
      <Button>unfollow</Button>
    </Flex>
  );
};
export default PostHeader;
