import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/myComponents/GameGrid";
import GenreList from "./components/myComponents/GenreList";
import NavBar from "./components/myComponents/NavBar";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
