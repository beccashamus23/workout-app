import { Image, Flex } from "@chakra-ui/react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";

type PostProps = {
  username: string;
  imgUrl: string;
  avatar: string;
};

const Post = ({ username, imgUrl, avatar }: PostProps) => {
  return (
    <Flex w={550} direction={"column"}>
      <PostHeader username={username} avatar={avatar} />
      <Image src={imgUrl} overflow={"hidden"} w={"auto"} h={"auto"} />
      <PostFooter username={username} />
    </Flex>
  );
};

export default Post;
