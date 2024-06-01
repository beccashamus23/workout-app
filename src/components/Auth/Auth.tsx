import { Flex, Image } from "@chakra-ui/react";
import AuthForm from "./AuthForm";
import homeImg from "../../../public/authbkg.png";

// DEFINES STYLE OF SIGN IN

const Auth = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      position="absolute"
      height="100vh"
      width="100%"
    >
      <Image src={homeImg} className="max-w-full flex" />
      <div className="absolute end-10 bottom-28 pb-4">
        <AuthForm />
      </div>
    </Flex>
  );
};
export default Auth;
