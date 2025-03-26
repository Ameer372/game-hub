import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  List,
  Text,
} from "@chakra-ui/react";
import { FaExclamationTriangle } from "react-icons/fa";
import GenreListSkeleton from "./GenreListSkeleton";
import useGameQueryStore from "@/store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) {
    return (
      <Text textAlign={"center"} fontSize={"lg"} color={"red.500"}>
        <Icon as={FaExclamationTriangle}></Icon> something went wrong: ( cannot
        load side panel ).
      </Text>
    );
  } else if (isLoading) {
    return <GenreListSkeleton />;
  }

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>

      <List.Root>
        {data?.results.map((genre) => (
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
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant={"underline"}
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
