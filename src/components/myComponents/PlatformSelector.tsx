import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

interface PlatformSelectorProps {
  onSelectPlatform: (plat: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Box ml={3}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {selectedPlatform ? selectedPlatform.name : "Platforms"}
          </Button>
        </MenuTrigger>
        <MenuContent pos={"absolute"} mt={2} width={"1/6"}>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
              value={platform.slug}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default PlatformSelector;
