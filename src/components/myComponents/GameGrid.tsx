import { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  const fetchGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error) return <Text>{error.message}</Text>;
  return (
    
      <InfiniteScroll  dataLength={fetchGamesCount} hasMore={!!hasNextPage} next={() => fetchNextPage()} loader={<Spinner/>}>
    <SimpleGrid
      padding={"10px"}
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
    </InfiniteScroll>
 
  );
};

export default GameGrid;
