import { Icon, Input } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <>
      <Icon as={FaSearch} />
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={"subtle"}
      ></Input>
    </>
  );
};

export default SearchInput;
