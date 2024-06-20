import {
  Flex,
  Button,
  Box,
  Text,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

const PostFooter = () => {
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
      <Text color={"gray.200"}>
        {likes} {likes === 1 ? "like" : "likes"}
      </Text>
      <Text textColor={"gray.200"}>sample caption</Text>

      <Text textColor={"gray.200"}>view all comments</Text>
      <Textarea border="1px" placeholder={"add a comment..."}></Textarea>
    </Box>
  );
};
export default PostFooter;
