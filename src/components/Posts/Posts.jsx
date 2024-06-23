import { Container } from "@chakra-ui/react";
import Post from "./Post";
const Posts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <Post
        imgUrl="../../../public/postExample.png"
        username="@fitness_girl"
        avatar="../../../public/postExample1.png"
      />
      <Post
        imgUrl="../../../public/postExample3.png"
        username="@daily_workouts"
        avatar="../../../public/postExample2.png"
      />
    </Container>
  );
};
export default Posts;