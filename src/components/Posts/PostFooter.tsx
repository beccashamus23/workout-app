import {
  Flex,
  Button,
  Input,
  Box,
  Text,
  IconButton,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

type PostFooterProps = { username: string };

const PostFooter = ({ username }: PostFooterProps) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => {
    setLiked((liked) => !liked);
    setLikes((likes) => (liked ? likes - 1 : likes + 1));
  };
  const toggleSave = () => {
    setSaved((saved) => !saved);
  };

  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>
        <Box>
          <IconButton
            icon={liked ? <FaHeart /> : <FaRegHeart />}
            onClick={toggleLike}
            aria-label="Like button"
            variant="ghost"
            _focus={{ outline: "none" }}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            color={liked ? "red.500" : "gray.500"}
          />
        </Box>
        <Box>
          <IconButton
            icon={<FaRegComment />}
            aria-label="Comment button"
            variant="ghost"
            color={"gray.500"}
            _focus={{ outline: "none" }}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
          ></IconButton>
        </Box>
        <Box>
          <IconButton
            icon={saved ? <FaBookmark /> : <FaRegBookmark />}
            onClick={toggleSave}
            aria-label="Save button"
            variant="ghost"
            _focus={{ outline: "none" }}
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            color={saved ? "blue.500" : "gray.500"}
          />
        </Box>
      </Flex>
      <Text color={"gray.200"} fontFamily={"sans-serif"}>
        {likes} {likes === 1 ? "like" : "likes"}
      </Text>
      <Flex fontSize={14} fontFamily={"sans-serif"}>
        <Text textColor={"gray.200"} mr={2} as={"b"}>
          {username}
        </Text>
        <Text textColor={"gray.200"}>today's workout!</Text>
      </Flex>
      <Box fontSize={14}>
        <Text fontFamily={"sans-serif"} textColor={"gray.200"}>
          view all comments
        </Text>
        <InputGroup border="1px">
          <Input
            fontSize={14}
            placeholder={"add a comment..."}
            fontFamily={"sans-serif"}
          ></Input>
        </InputGroup>
      </Box>
    </Box>
  );
};
export default PostFooter;
