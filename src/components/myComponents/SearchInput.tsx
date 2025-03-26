import useGameQueryStore from "@/store";
import { Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <>
      <Icon as={FaSearch} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) {
            setSearchText(ref.current.value);
            navigate("/");
          }
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
