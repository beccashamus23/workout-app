import { Container } from "@chakra-ui/react";
import Post from "./Post";
const Posts = () => {
  return (
    <Container w="100vw" h="100vw" py={10} maxW="100%" maxH="100%">
      <Post />
    </Container>
  );
};
export default Posts;
