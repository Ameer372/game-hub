import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading mb={5} fontSize={"4xl"} as={"h1"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
