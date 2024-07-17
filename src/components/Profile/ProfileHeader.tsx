import { Avatar, Flex, Text, Tooltip, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import profpic from "../../../public/postExample2.png";
import { FaGear } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const ProfileHeader = () => {
  return (
    <Flex direction="column" p={4} pl={20} w={"100%"}>
      <Flex align="center" mb={4}>
        <Avatar src={profpic} h="100px" w="100px" mx={2} />
        <Text color="white" fontSize="36px" fontWeight="bold" ml={2}>
          USERNAME
        </Text>
        <Flex pl={28}>
          <Link
            display="flex"
            to="/Profile"
            as={RouterLink}
            color="white"
            _hover={{ color: "blue.500" }}
            transition="0.2s ease-in-out"
            mx={2}
            opacity="50%"
          >
            <Tooltip
              placement="bottom"
              label="EDIT PROFILE"
              aria-label="Edit Profile Tooltip"
            >
              <span>
                <FaRegEdit fontSize="22px" />
              </span>
            </Tooltip>
          </Link>
          <Link
            display="flex"
            color="white"
            to="/Settings"
            as={RouterLink}
            _hover={{ color: "blue.500" }}
            transition="0.2s ease-in-out"
            mx={2}
            opacity="50%"
          >
            <Tooltip
              placement="bottom"
              label="SETTINGS"
              aria-label="Settings Tooltip"
            >
              <span>
                <FaGear fontSize="22px" />
              </span>
            </Tooltip>
          </Link>
        </Flex>
      </Flex>
      <Text color="white" fontSize="lg" fontWeight="bold">
        Name here
      </Text>
      <Text color="white" mt={2}>
        Bio
      </Text>
    </Flex>
  );
};

export default ProfileHeader;
