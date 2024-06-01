import { Flex, Button, Box, Image, VStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const [isLogin, setIsLogIn] = useState(true);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleAuth = () => {
    if (input.email && input.password && input.confirmPassword) {
      navigate("/");
    }
    return;
  };
  return (
    <>
      <Box className="text-white">
        <VStack>
          <Input
            placeholder="Email"
            fontSize={14}
            type="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            fontSize={14}
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
          ) : null}
          <Button
            onClick={handleAuth}
            my={1}
            h={6}
            bg="gray.900"
            border="1px"
            borderColor="white"
            color="white"
          >
            {isLogin ? "LOG IN" : "SIGN UP"}
          </Button>
        </VStack>
      </Box>
      <Box
        border={"1px solid gray"}
        borderRadius={4}
        padding={3}
        mt={2}
        className="text-white"
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogIn(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default AuthForm;
