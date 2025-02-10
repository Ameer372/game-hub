import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const bgColor = score > 80 ? "green" : score > 50 ? "yellow" : "";
  const fgColor =
    bgColor === "green" ? "white" : bgColor === "yellow" ? "gray.600" : "";

  return (
    <>
      {score && (
        <Badge
          fontSize={"14px"}
          paddingX={2}
          borderRadius={5}
          bg={bgColor}
          color={fgColor}
        >
          {score}
        </Badge>
      )}
    </>
  );
};

export default CriticScore;
