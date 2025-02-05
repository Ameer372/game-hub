import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Order by : Relevance
          </Button>
        </MenuTrigger>
        <MenuContent pos={"absolute"} mt={2} width={"1/6"}>
          <MenuItem value="1">Relevance</MenuItem>
          <MenuItem value="2">Date added</MenuItem>
          <MenuItem value="3">Name</MenuItem>
          <MenuItem value="4">Release date</MenuItem>
          <MenuItem value="5">Popularity</MenuItem>
          <MenuItem value="6">Average rating</MenuItem>
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default SortSelector;
