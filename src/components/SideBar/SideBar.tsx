import Home from "../Home/Home";
import Goals from "../Goals/Goals";
import logo from "../Home/logo.png";
import profpic from "../Home/profileicon.png";
import { Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <img src={logo} alt="logo" className="z=1 w-30 h-12 pl-3"></img>
      <div className="items-center text-white">
        <img
          src={profpic}
          className="mx-auto bg-white flex justify-center items-center rounded-full my-4 h-16 w-16"
        ></img>
        <Link display={"flex"} to={"/"} as={RouterLink}>
          HOME
        </Link>
        <Link display={"flex"} to={"/Goals"} as={RouterLink}>
          GOALS
        </Link>
        <h1>WORKOURS</h1>
        <h1>RECIPIES</h1>
      </div>
    </div>
  );
};

export default SideBar;
