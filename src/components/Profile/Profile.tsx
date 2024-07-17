import { Flex } from "@chakra-ui/react";
import ProfileHeader from "./ProfileHeader";
import Posts from "./Posts";

const Profile = () => {
  return (
    <Flex>
      <ProfileHeader />
      <Posts />
    </Flex>
  );
};

export default Profile;
