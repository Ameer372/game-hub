import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p={4}>
      <Image src={logo} boxSize={"60px"} />
      <Text fontSize={"2xl"}>NavBar</Text>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
