import { Image, Container } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

type PostProps = {
  username: string;
  imgUrl: string;
  avatar: string;
};

const Post = ({ username, imgUrl, avatar }: PostProps) => {
  return (
    <Container w={500}>
      <PostHeader username={username} avatar={avatar} />
      <Image
        src={imgUrl}
        my={2}
        overflow={"hidden"}
        w={"full"}
        h={"full"}
        border="1px"
        borderColor="gray.200"
      />
      <PostFooter username={username} />
    </Container>
  );
};

export default Post;
