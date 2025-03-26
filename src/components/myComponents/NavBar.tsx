import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p={4}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"60px"} objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
