import { Image, Container } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import examplePost from "../../../public/postExample.png";

const Post = () => {
  return (
    <>
      <Container w={500}>
        <PostHeader />
        <Image
          src={examplePost}
          my={2}
          overflow={"hidden"}
          w={"full"}
          h={"full"}
          border="1px"
          borderColor="gray.200"
        />
        <PostFooter />
      </Container>
    </>
  );
};
export default Post;
