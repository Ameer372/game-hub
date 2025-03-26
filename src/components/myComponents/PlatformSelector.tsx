import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
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
              onClick={() => setSelectedPlatformId(platform.id)}
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
