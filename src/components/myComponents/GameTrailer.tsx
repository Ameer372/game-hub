import useTrailers from "@/hooks/useTrailers";
import { Heading, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <>
      <Heading color={"gray.600"}>Game Trailer</Heading>
      <video src={first.data[480]} poster={first.preview} controls />
    </>
  ) : null;
};

export default GameTrailer;
