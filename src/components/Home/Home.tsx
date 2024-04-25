import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

interface Post {
  id: number;
  caption: string;
  imgUrl: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = () => {
    const post: Post = {
      id: 1,
      caption: "test",
      imgUrl: "test img",
    };
    setPosts([...posts, post]);
  };

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <>
      <h1>HOME</h1>
      <button onClick={addPost}></button>
      <Grid
        h="350px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        {posts.map((post, index) => (
          <GridItem key={index} colSpan={1} bg="white">
            <div>
              <img src={post.imgUrl} alt={post.caption} />
              <p>{post.caption}</p>
              {/* Add a button to delete the post */}
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
export default Home;
