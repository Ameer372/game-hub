import usePlatforms, { Platform } from "@/hooks/usePlatforms";
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
  selectedPlatformId?: number;
}

const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(p => p.id === selectedPlatformId)

  if (error) return null;

  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            {selectedPlatform ? selectedPlatform.name : "Platforms"}
          </Button>
        </MenuTrigger>
        <MenuContent pos={"absolute"} mt={2} width={"1/6"}>
          {data?.results.map((platform) => (
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
