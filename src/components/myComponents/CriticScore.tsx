import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  const bgColor = score > 80 ? "green" : score > 50 ? "yellow" : "";
  const fgColor =
    bgColor === "green" ? "white" : bgColor === "yellow" ? "black" : "";

  return (
    <>
      <Badge
        fontSize={"14px"}
        paddingX={2}
        borderRadius={1}
        bg={bgColor}
        color={fgColor}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
