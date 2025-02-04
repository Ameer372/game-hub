import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Icon, Image, Link, List, Text } from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";
import GenreListSkeleton from "./GenreListSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return (
      <Text textAlign={"center"} fontSize={"lg"} color={"red.500"}>
        <Icon as={FaExclamationTriangle}></Icon> something went wrong: ( cannot
        load side panel ).
      </Text>
    );
  }

  if (isLoading) {
    return <GenreListSkeleton />;
  }

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} as={"ul"} paddingY={1}>
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
            />
            <Link
              fontSize="lg"
              variant={"underline"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
