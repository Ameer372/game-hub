import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";
import { Card, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width={"300px"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Description>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
