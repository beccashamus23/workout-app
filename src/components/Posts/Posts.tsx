import { Container } from "@chakra-ui/react";
import Post from "./Post";
const Posts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2} border="1px">
      <Post />
    </Container>
  );
};
export default Posts;
