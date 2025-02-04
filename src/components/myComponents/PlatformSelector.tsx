import usePlatforms from "@/hooks/usePlatforms";
import {
  Box,
  Button,
  Icon,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BiSolidChevronDown } from "react-icons/bi";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Box ml={3}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Open <Icon as={BiSolidChevronDown} />
          </Button>
        </MenuTrigger>
        <MenuContent pos={"absolute"} mt={2} width={"1/6"}>
          {data.map((platform) => (
            <MenuItem key={platform.id} value={platform.slug}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
