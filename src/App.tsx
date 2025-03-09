import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "./components/myComponents/GameGrid";
import GameHeading from "./components/myComponents/GameHeading";
import GenreList from "./components/myComponents/GenreList";
import NavBar from "./components/myComponents/NavBar";
import PlatformSelector from "./components/myComponents/PlatformSelector";
import SortSelector from "./components/myComponents/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
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
}

export default App;
