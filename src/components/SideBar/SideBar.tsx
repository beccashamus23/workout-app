//import Goals from "../Goals/Goals";
import logo from "../Home/logo.png";
import profpic from "../Home/profileicon.png";
import { Link, Box, Image, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import mont from "../../assets/Fonts";

const SideBar = () => {
  return (
    <Box
      border="4px"
      borderColor="whiteAlpha.300"
      className="py-4 w-64 h-screen rounded-lg"
    >
      <img src={logo} alt="logo" className="z=1 w-30 h-12 pl-3"></img>
      <Image
        src={profpic}
        my={6}
        className="mx-auto bg-white flex justify-center items-center rounded-full my-4 h-16 w-16"
      ></Image>
      <Flex
        direction={"column"}
        className="text-white text-xl"
        fontFamily="mont"
        gap={8}
        marginStart={4}
        w="full"
        h="full"
      >
        <Link display={"flex"} to={"/"} as={RouterLink}>
          HOME
        </Link>
        <Link display={"flex"} to={"/"} as={RouterLink}>
          ACTIVITY
        </Link>
        <Link display={"flex"} to={"/"} as={RouterLink}>
          EXPLORE
        </Link>
        <Link display={"flex"} to={"/"} as={RouterLink}>
          PROFILE
        </Link>
        <Link display={"flex"} to={"/Goals"} as={RouterLink}>
          GOALS
        </Link>
        <Link display={"flex"} to={"/Goals"} as={RouterLink}>
          WORKOUTS
        </Link>
        <Link display={"flex"} to={"/Goals"} as={RouterLink}>
          RECIPIES
        </Link>
      </Flex>
    </Box>
  );
};

export default SideBar;
