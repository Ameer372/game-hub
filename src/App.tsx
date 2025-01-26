import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/myComponents/GameGrid";
import GenreList from "./components/myComponents/GenreList";
import NavBar from "./components/myComponents/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"aside"} display={{ base: "none", lg: "block" }}>
        <GenreList />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
