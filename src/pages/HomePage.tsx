import GameGrid from "@/components/myComponents/GameGrid";
import GameHeading from "@/components/myComponents/GameHeading";
import GenreList from "@/components/myComponents/GenreList";
import PlatformSelector from "@/components/myComponents/PlatformSelector";
import SortSelector from "@/components/myComponents/SortSelector";
import { Grid, GridItem, Box, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem
        area={"aside"}
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList />
      </GridItem>

      <GridItem area={"main"}>
        <Box paddingLeft={3}>
          <GameHeading />
          <HStack>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
