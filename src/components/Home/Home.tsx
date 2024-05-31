import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import profpic from "./profileicon.png";

interface Post {
  id: number;
  caption: string;
  imgUrl: string;
}

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = () => {
    console.log(logo);
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
      <div className="py-4 w-64 h-screen bg-white bg-opacity-20">
        <img src={logo} alt="logo" className="z=1 w-30 h-12 pl-3"></img>
        <div className="text-center text-white ">
          <img
            src={profpic}
            className="mx-auto bg-white flex justify-center items-center rounded-full my-4 h-16 w-16"
          ></img>
          <Link to="/Goals">GOALS</Link>
          <h1>WORKOURS</h1>
          <h1>RECIPIES</h1>
          <button onClick={addPost}>ADD POST</button>
        </div>

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
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </div>
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
}
export default Home;
