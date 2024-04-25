import React from "react";
import { Flex, Container, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "./AuthForm";

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
      <Image
        src="UPLIFT.png"
        className="absolute h-full max-h-full w-full max-w-full z-0 flex-auto"
      />
      <div className="absolute bottom-40 right-40 pr-14 pb-12">
        <AuthForm />
      </div>
    </Flex>
  );
};
export default Auth;
