import profpic from "../../../public/postExample2.png";
import logo from "../../../public/logo.png";
import { Link, Image, Flex, Avatar } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";
import {
  FaHome,
  FaUser,
  FaMapMarkerAlt,
  FaFlagCheckered,
  FaDumbbell,
} from "react-icons/fa";

//import mont from "../../assets/Fonts";

const SideBar = () => {
  return (
    <Flex
      className="py-4 h-screen rounded-lg"
      h="100vw"
      maxH="100%"
      alignItems={"center"}
      direction={"column"}
    >
      <Image src={logo} alt="logo" h={"54px"} mt={8}></Image>
      <Avatar src={profpic} my={6} h={"72px"} w={"72px"} />
      <Flex
        direction={"column"}
        className="text-white text-xl"
        gap={8}
        w="full"
        h="full"
        alignItems={"center"}
        fontSize={"28px"}
      >
        <Link
          display={"flex"}
          to={"/"}
          as={RouterLink}
          _hover={{ color: "blue.500" }}
          transition={"0.2s ease-in-out"}
          fontSize={"30px"}
        >
          <Tooltip placement="right" label="HOME" aria-label="A tooltip">
            <span>
              <FaHome />
            </span>
          </Tooltip>
        </Link>
        <Link
          display={"flex"}
          to={"/Profile"}
          as={RouterLink}
          _hover={{ color: "blue.500" }}
          transition={"0.2s ease-in-out"}
        >
          <Tooltip placement="right" label="PROFILE" aria-label="A tooltip">
            <span>
              <FaUser />
            </span>
          </Tooltip>
        </Link>
        <Link
          display={"flex"}
          to={"/explore"}
          as={RouterLink}
          _hover={{ color: "blue.500" }}
          transition={"0.2s ease-in-out"}
        >
          <Tooltip placement="right" label="EXPLORE" aria-label="A tooltip">
            <span>
              <FaMapMarkerAlt />
            </span>
          </Tooltip>
        </Link>
        <Link
          display={"flex"}
          to={"/"}
          as={RouterLink}
          _hover={{ color: "blue.500" }}
          transition={"0.2s ease-in-out"}
        >
          <Tooltip placement="right" label="GOALS" aria-label="A tooltip">
            <span>
              <FaFlagCheckered />
            </span>
          </Tooltip>
        </Link>
        <Link
          display={"flex"}
          to={"/Workouts"}
          as={RouterLink}
          mb={3}
          _hover={{ color: "blue.500" }}
          transition={"0.2s ease-in-out"}
        >
          <Tooltip placement="right" label="WORKOUTS" aria-label="A tooltip">
            <span>
              <FaDumbbell />
            </span>
          </Tooltip>
        </Link>
        <Link to={"/auth"} as={RouterLink} mt={45} fontSize={"16px"}>
          Log Out
        </Link>
      </Flex>
    </Flex>
  );
};

export default SideBar;
