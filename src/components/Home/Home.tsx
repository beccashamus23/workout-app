import { Box, Container } from "@chakra-ui/react";
import Posts from "../Posts/Posts";

const Home = () => {
  return (
    <Container maxW={"container.lg"}>
      <Box flex={2} py={10} border="2px">
        <Posts />
      </Box>
    </Container>
  );
};

export default Home;
