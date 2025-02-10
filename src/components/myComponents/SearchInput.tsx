import { Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <Icon as={FaSearch} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"subtle"}
        ></Input>
      </form>
    </>
  );
};

export default SearchInput;
