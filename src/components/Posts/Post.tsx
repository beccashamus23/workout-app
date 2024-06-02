import { Image, Container } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

const Post = () => {
  return (
    <>
      <PostHeader />
      <Image my={2} borderRadius={4} overflow={"hidden"} />
      <PostFooter />
    </>
  );
};
export default Post;
