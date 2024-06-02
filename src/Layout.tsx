import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: any) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {pathname !== "/auth" ? (
        <Box>
          <SideBar />
        </Box>
      ) : null}
      <Box>{children}</Box>
    </Flex>
  );
};
export default Layout;
