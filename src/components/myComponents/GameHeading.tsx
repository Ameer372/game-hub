import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {

  const {data: genres} = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId);

  const {data: platforms} = usePlatforms();
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId)

  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;

  return (
    <Heading mb={5} fontSize={"4xl"} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
