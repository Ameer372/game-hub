import { Game } from "@/entities/Game";
import getCroppedImageUrl from "@/services/image-url";
import { Card, HStack, Image } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: Game;
}
const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack mb={3} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform || [])}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title>
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
