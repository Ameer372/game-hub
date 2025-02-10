import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { ColorModeButton } from "../ui/color-mode";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <HStack justifyContent={"space-between"} p={4}>
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
