import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding={"10px"}>
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={6}
    >
      {isLoading &&
        skeletons.map((Skeleton) => (
          <GameCardContainer key={Skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
        {data?.pages.map((page, index) =>
        <React.Fragment key={index}>
          {!isLoading && page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
        ))}
        </React.Fragment>)}
    </SimpleGrid>
    {hasNextPage && <Button my={5} onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>}
    </Box>
  );
};

export default GameGrid;
