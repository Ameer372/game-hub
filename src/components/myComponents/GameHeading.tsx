import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {

  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

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
