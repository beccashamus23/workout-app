import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: any) => {
  const { pathname } = useLocation();
  return (
    <Flex borderRadius={"1px"}>
      {pathname !== "/auth" ? (
        <Box pl={3}>
          <SideBar />
        </Box>
      ) : null}
      <Box w={"full"} h={"full"} alignItems={"center"}>
        {children}
      </Box>
      <Box w={"100px"}>
        <Flex />
      </Box>
    </Flex>
  );
};
export default Layout;
