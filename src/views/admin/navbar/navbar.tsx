import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Switch,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import avatar from "./avatar.png";
import { RootState } from "../../../redux/store"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
import { SidebarResponsive } from "../../../components/sidebar/Sidebar";
import routes from "../../../routes";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSwitchClick = () => {
    navigate("/dashboard/plans");
  };

  return (
    <Box
      position="fixed"
      top="3"
      right="3"
      width={{ base: "100%", md: "50%", xl: "30%" }}
      height="82px"
      backgroundColor="white"
      zIndex="5"
      borderRadius={20}
      shadow={{ base: "none", md: "md" }}
    >
      <Flex
        align={{ base: "right", md: "center" }}
        justify={'end'} // Space between on small screens, align right on medium/large
        height="100%"
        padding="0 20px"
        boxSizing="border-box"
      >
        <SidebarResponsive routes={routes} />

        <Flex align="center" ml="0" border={'2px solid #22297C'} borderRadius={40} padding={1.5} gap={4}>
          <Text fontWeight="bold" fontSize="lg">
            {user.fullName}
          </Text>
          <Image
            src={avatar}
            alt={`${user.fullName}`}
            borderRadius="full"
            boxSize="50px"
            objectFit="cover"
            border={'2px solid #22297C'}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
