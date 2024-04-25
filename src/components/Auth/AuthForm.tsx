import { Flex, Button, Box, Image, VStack, Input } from "@chakra-ui/react";
import { useState } from "react";
const AuthForm = () => {
  const [isLogin, setIsLogIn] = useState(true);
  return (
    <Box>
      <VStack>
        <Input placeholder="Email" fontSize={14} />
        <Input placeholder="Password" fontSize={14} type="password" />
        {!isLogin ? (
          <Input placeholder="Confirm Password" fontSize={14} type="password" />
        ) : null}
        <Button>{isLogin ? "Log in" : "Sign Up"}</Button>
      </VStack>
    </Box>
  );
};
export default AuthForm;
