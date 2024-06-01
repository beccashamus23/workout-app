import { Box, Flex } from "@chakra-ui/react";
import SideBar from "./components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: any) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {pathname !== "/auth" ? (
        <Box className="py-4 w-64 h-screen bg-white bg-opacity-20 rounded-lg hover:bg-sky-200 hover:bg-opacity-20 border">
          <SideBar />
        </Box>
      ) : null}
      <Box>{children}</Box>
    </Flex>
  );
};
export default Layout;
